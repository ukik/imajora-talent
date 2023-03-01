<template>
<div class="corner_container">
    <div class="corner_ribbon">
      <span>blokir</span>
    </div>
</div>  
</template>

<style type="text/css" scoped>

.corner_container {
  background:red;
  height:60px;
  width:60px;
  clip-path: polygon(100% 0, 0 0, 0 100%);  
}

.corner_ribbon {
  width: 0; 
  height: 0; 
  background: red;
  color:white;
}

.corner_ribbon span {
  position:absolute;
  top: 5px;
  width: 60px;
  left: 5px;
  width: 60px;
  height:60px;
  text-align: center;
  font-size: 13px;
  font-family: arial;
  transform: rotate(-45deg);
  display:block;
}  
</style>