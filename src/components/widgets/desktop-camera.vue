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

        <!-- <div class="camera-button">
            <button type="button" class="button is-rounded" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
              <span v-if="!isCameraOpen">Open Camera</span>
              <span v-else>Close Camera</span>
          </button>
        </div> -->
        
        <div v-show="isCameraOpen && isLoading">
          <q-spinner-gears size="50px" color="primary" />
        </div>
        
        <div>
          <div v-if="isCameraOpen" v-show="!isLoading" class="q-mb-lg">
            
            <!-- <video v-show="!isPhotoTaken" ref="camera" :width="$q.screen.width <= 450 ? (450*0.65) : 450" :height="$q.screen.width <= 425 ? (337.5*0.65) : 337.5" autoplay></video>

            <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="$q.screen.width <= 450 ? (450*0.65) : 450" :height="$q.screen.width <= 425 ? (337.5*0.65) : 337.5"></canvas>
 -->

            <video v-show="!isPhotoTaken" ref="camera" width="450" height="337.5" autoplay></video>
            <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" width="450" height="337.5"></canvas>

          </div>         

        </div>

    </q-page>
  </q-page-container>  

    <q-footer class="text-center q-py-md bg-white">
      <div v-if="isCameraOpen && !isLoading">
        <q-btn unelevated rounded color="primary" icon="camera_alt" v-if="!isPhotoTaken" label="ambil gambar" @click="takePhoto" />
      </div>          

      <div v-if="isPhotoTaken && isCameraOpen" class="q-gutter-sm">
        <q-btn unelevated rounded icon="autorenew" color="pink" label="ulangi" @click="takePhoto" />
        <q-btn unelevated rounded icon="done" color="blue" label="setuju" @click="fixedPhoto" v-close-popup/>
      </div>
    </q-footer>
  
</q-layout>

</template>

<script type="text/javascript">
export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },
  mounted() {
    // this.toggleCamera()
    this.openCamera();
  },
  methods: {
    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    closeCamera(){
      this.isCameraOpen = false;
      this.isPhotoTaken = false;
      this.isShotPhoto = false;
      this.stopCameraStream();
    },
    openCamera(){
      this.isCameraOpen = true;
      this.createCameraElement();
    },
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
        audio: false,
        video: true
      });

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

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch(error => {
          this.isLoading = false;       
          // alert("May the browser didn't support or there is some errors.");
        });
    },
    
    stopCameraStream() {
      console.log(this.$refs.camera.srcObject)
      if(!this.$refs.camera.srcObject) return
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');    

      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);

    },
    fixedPhoto() {
      this.$emit('onBubbleEvent_WebCam', document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/jpeg"))
      this.closeCamera()
    },
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
};  
</script>

<style scoped>

/* .web-camera-container {
   margin-top: 2rem;
   margin-bottom: 2rem;
   padding: 2rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 1px solid #ccc;
   border-radius: 4px;
   width: 500px;
}
 .web-camera-container .camera-button {
   margin-bottom: 2rem;
}
 .web-camera-container .camera-box .camera-shutter {
   opacity: 0;
   width: 450px;
   height: 337.5px;
   background-color: #fff;
   position: absolute;
}
 .web-camera-container .camera-box .camera-shutter.flash {
   opacity: 1;
}
 .web-camera-container .camera-shoot {
   margin: 1rem 0;
}
 .web-camera-container .camera-shoot button {
   height: 60px;
   width: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100%;
}
 .web-camera-container .camera-shoot button img {
   height: 35px;
   object-fit: cover;
}*/
/* .web-camera-container .camera-loading {
   overflow: hidden;
   height: 100%;
   position: absolute;
   width: 100%;
   min-height: 150px;
   margin: 3rem 0 0 -1.2rem;
}
 .web-camera-container .camera-loading ul {
   height: 100%;
   position: absolute;
   width: 100%;
   z-index: 999999;
   margin: 0;
}
 .web-camera-container .camera-loading .loader-circle {
   display: block;
   height: 14px;
   margin: 0 auto;
   top: 50%;
   left: 100%;
   transform: translateY(-50%);
   transform: translateX(-50%);
   position: absolute;
   width: 100%;
   padding: 0;
}
 .web-camera-container .camera-loading .loader-circle li {
   display: block;
   float: left;
   width: 10px;
   height: 10px;
   line-height: 10px;
   padding: 0;
   position: relative;
   margin: 0 0 0 4px;
   background: #999;
   animation: preload 1s infinite;
   top: -50%;
   border-radius: 100%;
}
 .web-camera-container .camera-loading .loader-circle li:nth-child(2) {
   animation-delay: 0.2s;
}
 .web-camera-container .camera-loading .loader-circle li:nth-child(3) {
   animation-delay: 0.4s;
}
 @keyframes preload {
   0% {
     opacity: 1;
  }
   50% {
     opacity: 0.4;
  }
   100% {
     opacity: 1;
  }
}*/
 
</style>