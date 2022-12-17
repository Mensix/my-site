<template>
  <layout-navbar />
  <div class="w-full bg-white bg-scatter">
    <slot />
  </div>
  <layout-footer />
</template>

<style scoped>
.bg-scatter {
  background-image: url("data:image/svg+xml,%0A%3Csvg id='visual' viewBox='0 0 900 600' width='900' height='600' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Crect x='0' y='0' width='900' height='600' fill='%23ffffff'%3E%3C/rect%3E%3Cg fill='none' stroke='%23f3f4f67f' stroke-width='6'%3E%3Ccircle r='76' cx='504' cy='329'%3E%3C/circle%3E%3Ccircle r='3' cx='711' cy='257'%3E%3C/circle%3E%3Ccircle r='8' cx='138' cy='517'%3E%3C/circle%3E%3Ccircle r='29' cx='497' cy='499'%3E%3C/circle%3E%3Ccircle r='59' cx='127' cy='194'%3E%3C/circle%3E%3Ccircle r='70' cx='317' cy='80'%3E%3C/circle%3E%3Ccircle r='73' cx='662' cy='97'%3E%3C/circle%3E%3Ccircle r='4' cx='307' cy='474'%3E%3C/circle%3E%3Ccircle r='18' cx='789' cy='478'%3E%3C/circle%3E%3Ccircle r='66' cx='641' cy='422'%3E%3C/circle%3E%3Ccircle r='51' cx='188' cy='356'%3E%3C/circle%3E%3Ccircle r='54' cx='343' cy='258'%3E%3C/circle%3E%3Ccircle r='73' cx='817' cy='107'%3E%3C/circle%3E%3Ccircle r='57' cx='495' cy='172'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
}
</style>
