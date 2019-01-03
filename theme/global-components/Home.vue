<template>
	<div class="home-page">
    <div class="home-header">
      <img src="../../blog/images/logo.jpeg" alt="">
      <h1 class="custom-font">
        Welcome to Lunarious!
      </h1>
    </div>
		<Content />
	</div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.home-header {
  padding: 3.5em 0;
  margin-bottom: 1em;
  background: linear-gradient(to right, rgba(107, 183, 86, 0.95), rgba(0, 143, 104, 0.95));
  background: linear-gradient(to right, var(--top1), var(--top2));
  background-color: #6bb756;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  text-align: center;

  h1 {
    padding: 1rem 0;
    color: #fcfcfc;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}
</style>
