<template>
<q-layout view="Lhh lpR fff" container class="bg-white">

  <q-header class="bg-primary">
    <q-toolbar>
      <q-toolbar-title>Camera</q-toolbar-title>
      <q-space />
      <q-btn flat v-close-popup @click="closeCamera" v-if="!isLoading" round dense icon="close" />
    </q-toolbar>
  </q-header>

  <q-page-container>
    <q-page class="flex flex-center text-center">

        <div v-show="isLoading">
          <q-spinner-gears size="50px" color="primary" />
        </div>
        
        <div v-show="!isLoading" class="q-mb-lg">

          <video 
            v-show="isRecording" 
            ref="camera" 
            id="preview" 
            :width="$q.screen.width*0.5" height="337.5" autoplay muted></video>
            
          <video v-show="!isRecording" id="recording" :width="$q.screen.width*0.5" height="337.5" controls></video>
<!-- 
          <video v-show="!isPhotoTaken" ref="camera" width="450" height="337.5" autoplay></video>
          <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" width="450" height="337.5"></canvas>
-->
        </div>         

    </q-page>
  </q-page-container>  

    <q-footer class="text-center q-py-md bg-white">

      <div v-if="!isRecording">
        <q-btn unelevated rounded color="primary" icon="local_movies" label="ambil video" @click="onClickRecording(0)" />
      </div>          

      <div v-if="isRecording && !isLoading" class="q-gutter-sm">
        <!-- <q-btn unelevated rounded icon="autorenew" color="pink" label="ulangi" @click="onClickStop" /> -->
        <q-btn unelevated rounded icon="done" color="blue" label="setuju" @click="onClickStop" />
      </div>


    </q-footer>

</q-layout>

</template>


<script>
// let recordingTimeMS = 5000;

export default {
  data() {
    return {
      isRecording: false,
      isLoading: false,

      recordingTimeMS: 10000,

      preview: null,
      recording: null,
      startButton: null,
      stopButton: null,
      downloadButton: null,
    }
  },
  mounted() {
    // const vm = this

    this.preview = document.getElementById("preview");
    this.recording = document.getElementById("recording");
    this.startButton = document.getElementById("startButton");
    this.stopButton = document.getElementById("stopButton");
    this.downloadButton = document.getElementById("downloadButton");

    // startButton.addEventListener("click", vm.onClickRecording, false); 
    // stopButton.addEventListener("click", vm.onClickStop, false);

  },
  methods: {
    log(msg) {
      let logElement = document.getElementById("log");

      logElement.innerHTML += msg + "\n";
    },
    wait(delayInMS) {
      return new Promise(resolve => setTimeout(resolve, delayInMS));
    },
    onClickStop() {
      // this.stop(preview.srcObject);
      this.stop();
    },
    onClickRecording(mode) {
      const vm = this
      vm.isRecording = true
      vm.isLoading = true;

      if(navigator.mediaDevices == undefined) {
        // this.isLoading = false
        this.$emit('onBubbleEvent_Close')
        this.$q.notify({
          message: 'Perangkat tidak mendukung',
          color: 'negative',
          icon: 'warning',
          position: 'top',
        })
        return
      }

     if(mode == 0) {
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        .then(stream => {
          vm.isLoading = false;
          vm.preview.srcObject = stream;
          vm.startRecordingManual(stream)        
        })
        .catch(error => {
          vm.isLoading = false;
        });        

        return
      }

      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })
      .then(stream => {
        vm.isLoading = false;

        vm.preview.srcObject = stream;
        vm.downloadButton.href = stream;
        vm.preview.captureStream = vm.preview.captureStream || vm.preview.mozCaptureStream;
        return new Promise(resolve => vm.preview.onplaying = resolve);
      })
      .then(() => 
        vm.startRecording(vm.preview.captureStream(), vm.recordingTimeMS)
      )
      .then (recordedChunks => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/mp4" });
        vm.recording.src = URL.createObjectURL(recordedBlob);
        vm.downloadButton.href = vm.recording.src;
        vm.downloadButton.download = "RecordedVideo.mp4";
        
        vm.log("Successfully recorded " + recordedBlob.size + " bytes of " + recordedBlob.type + " media.");
      })
      .catch(() => {
        vm.isLoading = false;
        vm.log
      });
    },
    startRecordingManual(stream) {
      window.mediaRecorder = new MediaRecorder(stream);
      window.dataChunks = [];
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      mediaRecorder.ondataavailable = e => dataChunks.push(e.data);
    },
    startRecording(stream, lengthInMS) {
      const vm = this

      let recorder = new MediaRecorder(stream);
      data = [];
      recorder.ondataavailable = event => data.push(event.data);
      recorder.start();

      vm.log(recorder.state + " for " + (lengthInMS/1000) + " seconds...");
     
      let stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve;
        recorder.onerror = event => reject(event.name);
      });

      let recorded = vm.wait(lengthInMS).then(
        () => recorder.state == "recording" && recorder.stop()
      );
     
      return Promise.all([
        stopped,
        recorded
      ])
      .then(() => { 
        // if(!vm.isRecording) return null
        // console.log(data)
        
        vm.isRecording = false
        let tracks = vm.$refs.camera.srcObject.getTracks();
        tracks.forEach(track => {
          track.stop();
        });    

        return data
      });
    },
    // stop(stream) {
    closeCamera() {
      if(!this.$refs.camera.srcObject) return
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });      
      // stream.getTracks().forEach(track => track.stop());
      this.isRecording = false
    },
    stop() {
      window.clearTimeout()

      if ("mediaRecorder" in window && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        // console.log(mediaRecorder.state);
        mediaRecorder.onstop = () => {
          let blob = new Blob(dataChunks, { type: "video/mp4;" });
          // dataChunks = [];
          let videoURL = window.URL.createObjectURL(blob);

          const videoPlayback = document.getElementById("recording");

          videoPlayback.src = videoURL;

          this.$emit('onBubbleEvent_WebCam', blob)

          delete window.mediaRecorder; 
          delete window.dataChunks; 
        };
      }

      if(!this.$refs.camera.srcObject) return
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });      

      // stream.getTracks().forEach(track => track.stop());
      this.isRecording = false
    },  
    fixedVideo() {
      this.$emit('onBubbleEvent_WebCam', window.blob)
      this.closeCamera()
    },
  }
};

</script>



















<style scoped>

video {
  margin-top: 2px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  display: block;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  text-decoration: none;
}

.left {
  margin-right: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.right {
  margin-left: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.bottom {
  clear: both;
  padding-top: 10px;
}
</style>



