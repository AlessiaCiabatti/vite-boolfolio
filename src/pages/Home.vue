<script>
export default {
  name: 'Home'
}
</script>

<template>
  <section>
    <div class="container d-flex">

      <div class="icon d-flex flex-column">
        <a target="_blank" href="https://github.com/AlessiaCiabatti">
          <img class="git" src="../image/git.png" alt="">
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/alessiaciabatti/">
          <img src="../image/linkedin.png" alt="">
        </a>
      </div>

      <div class="title">
        <h1>Ciao, sono Alessia</h1>
        <h5 class="jr">Jr. Full-Stack Web Developer</h5>
        <!-- <p class="description">Ben venuto nel mio profilo, sono Alessia Ciabatti, sviluppattrice web con la passione dei
          SOLDI. Visita il mio sito!</p> -->
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, maiores assumenda, rem facilis quaerat illum cum ut aliquam cupiditate alias temporibus, saepe neque maxime nobis voluptatem veniam consequuntur sint id?</p>

        <div class="text-box">
          <a href="http://localhost:5173/contatti" class="btn btn-white btn-animate">click me</a>
        </div>

      </div>


      <div class="my_image">
        <div class="prova">
          <div class="image-container">
            <img src="../image/graph2.png" alt="Graph Image" class="graph-image">
            <div class="overlay"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  // background-color: red;
  height: calc(100vh - 70px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 250px;

  .icon {
    margin-top: 90px;
    margin-right: 140px;

    a {
      .git {
        margin-bottom: 30px;
      }

      img {
        height: 25px;
      }
    }
  }

  .title {
    width: 500px;

    h1 {
      font-size: 3.5rem;
    }

    .jr {
      color: grey;
      font-size: 1.5rem;
      margin-top: 20px;
    }

    .description {
      color: gray;
      margin-top: 20px;
      font-size: 1.2rem;
    }

    // background-color: green;

    // width: 350px;

    .text-box {
      margin-top: 40px;
    }

    .btn:link,
    .btn:visited {
      text-transform: uppercase;
      text-decoration: none;
      padding: 15px 40px;
      display: inline-block;
      border-radius: 100px;
      transition: all .2s;
      position: absolute;
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn-white {
      background-color: #8c74e5;
      color: white;
    }

    .btn::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 100px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
    }

    .btn-white::after {
      background-color: #c1b4f3;
    }

    .btn:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }

    .btn-animated {
      animation: moveInBottom 5s ease-out;
      animation-fill-mode: backwards;
    }

    @keyframes moveInBottom {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }

      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  .my_image {

    .prova {
      position: absolute;

      // background-color: yellow;
      // width: 600px;
      margin-left: 50px;

      .image-container {
        position: relative;
        display: inline-block;
        top: -170px;

        .graph-image {
          display: block;
          width: 610px;
          height: auto;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('../image/fotocv.jpg') no-repeat center center;
          background-size:contain;
          mask-image: url('../image/graph2.png');
          mask-size: cover;
          mask-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
