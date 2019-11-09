<template>
  <div>
  <div class="card-background">
  </div>

      <div class="inner-card container-fluid">
        <div class="row ">
          <div class="col-3 pt-5">
          <div class="left-card pt-4 ">
            <div>

            </div>
            <div class="block">
              <el-timeline :reverse="reverse" class="ml-n3">
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :color="activity.color"
                  class="deneme"
                  :timestamp="activity.timestamp">
                  {{activity.content}}
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
          </div>
          <div class="center-card pt-4  col-8">
            <div class="">
              <div class="img-div">
                <img src="../../assets/pp.jpeg">
                <div class="text-center">
                  <p class="user-name">Can Yardımcı</p>
                  <p>@Developer</p>
                </div>
              </div>

              <div class="text-center mt-n4 d-flex justify-content-center ">
              <div class="user-description ">
             <p class="desc"> Lorem Ipsum is dummy text used in the typesetting and printing industry. Lorem Ipsum has been used as industry-standard counterfeit texts since the 1500s, when an unknown printer took a gallery of fonts to create a sample book. Not only has it survived for five hundred years, it has also spread unchanged to electronic typesetting. It became popular in the 1960s with the publication of Letraset sheets, including Lorem Ipsum passages, and more recently with desktop publishing software including versions of Lorem Ipsum, such as Aldus PageMaker.
             </p>
                <div class="row mt-5 d-flex justify-content-center">
                  <div class=" watch-select">
                    Posts (12)
                  </div>
                  <div class=" watch-select">
                    Watcher (256)
                  </div>
                  <div class=" watch-select">
                    Watching (195)
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                activities: [{
                    content: 'Java Developer at Özgür Yazilim A.Ş.',
                }, {
                    content: 'Full Stack Developer at Impoort',
                }, {
                    content: 'Co - Founder Impoort',
                    color: '#0bbd87'
                }],
                reverse: true,

            }
        },
        created() {
            this.$store.dispatch("activePPImage", true);

        }
    }
</script>

<style scoped>
.card-background {
  width: 100%;
  height: 250px;
  background: linear-gradient(221deg, #3d4f75, #6988ca, #206c4c, #0e293a);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 54s ease infinite;
  -moz-animation: AnimationName 54s ease infinite;
  -o-animation: AnimationName 54s ease infinite;
  animation: AnimationName 54s ease infinite;

}
  .inner-card {
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 750px;
    margin-bottom: 50px;
    background-color: #FFFFFF;
    -webkit-box-shadow: 0px 0px 21px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 21px -8px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 21px -8px rgba(0,0,0,0.75);
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: -110px;

  }
.img-div{
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  border-radius: 50%;
  height: 150px;

}
  .left-card{
    height: 650px;
    position: sticky;
    position: -webkit-sticky;
    z-index: 1;
    width: 300px;
    -webkit-box-shadow: 0px 0px 21px 11px rgba(40,62,74,0.25);
    -moz-box-shadow: 0px 0px 21px 11px rgba(40,62,74,0.25);
    box-shadow: 0px 0px 21px 11px rgba(40,62,74,0.25);
  }

  .center-card{
    margin-left: -140px;
  }

 .user-description{
   width: 60%;
   color: rgb(153, 153, 153);


 }
.desc{
}
.block{

}
.user-name{
  font-family: Roboto Slab,Times New Roman,serif;
  font-weight: 700;
  color: #3c4858;
  font-size: 24px;
}

.watch-select{
  padding: 12px;
  width: 200px;
  border-radius: 12px;
  margin-left: 12px;
  color: #283E4A;
  cursor: pointer;
}
.watch-select:hover{
  background-color: #f4f4f4;
  border: 1px;
}
@-webkit-keyframes AnimationName {
  0%{background-position:0% 71%}
  50%{background-position:100% 30%}
  100%{background-position:0% 71%}
}
@-moz-keyframes AnimationName {
  0%{background-position:0% 71%}
  50%{background-position:100% 30%}
  100%{background-position:0% 71%}
}
@-o-keyframes AnimationName {
  0%{background-position:0% 71%}
  50%{background-position:100% 30%}
  100%{background-position:0% 71%}
}
@keyframes AnimationName {
  0%{background-position:0% 71%}
  50%{background-position:100% 30%}
  100%{background-position:0% 71%}
}
</style>
