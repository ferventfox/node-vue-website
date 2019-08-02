<template>
  <div>
    <div class="position-relative">
        <section class="section-shaped my-0">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
            </div>
            <div class="container shape-container-custom">
              <div class="row justify-content-center text-center">
                <div class="col-10">
                  <h2 class="display-3 text-white">About Us</h2>
                  <p class="lead text-white">
                    Our MISSION is to help entrepreneurs grow their customer base and be successful in their niche. We do this by using technology to build customer relationships while saving businesses time and incorporating marketing strategies to maximize reach across the web.
                  </p>
                  <p class="lead text-white">
                    Our CORE VALUES are built around quality, integrity, and generosity. We provide high-quality services that add value and give you an advantage in your niche. If for some reason we’re not the right fit for you, we’ll let you know during the free consultation.
                  </p>
                  <img style="width: 200px;" v-lazy="'/img/brand/logo.png'">
                </div>
              </div>
            </div>
        </section>
    </div>


    <section class="section section-lg mt-2">
      <div class="container">
        <div class="row justify-content-center text-center mb-3">
          <div class="col-10">
            <h2 class="display-3">Meet the Founders</h2>
            <p class="lead text-muted">
              Our CORE VALUES are built around quality, integrity, and generosity. We provide high-quality services that add value and give you an advantage in your niche.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 offset-lg-2 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'https://media.licdn.com/dms/image/C5603AQHkWQ6H9noUMw/profile-displayphoto-shrink_800_800/0?e=1570060800&v=beta&t=8rYd4j-zZ72TnXT0zcKOTXfULBZ960CWBdMyafUv_GY'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Zach Hall</span>
                  <small class="h6 text-muted">Co-Founder && Chief Executive Officer</small>
                </h5>
                <div class="mt-3">
                  <base-button tag="a" target="_blank" href="https://www.linkedin.com/in/zach-hall-seattle/" type="warning" icon="fa fa-linkedin" rounded
                  icon-only></base-button>
                  <base-button tag="a" target="_blank" href="https://www.facebook.com/zach.hall.7773631" type="warning" icon="fa fa-facebook" rounded
                  icon-only></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'https://media.licdn.com/dms/image/C5603AQGM346Zl5UXDw/profile-displayphoto-shrink_800_800/0?e=1570060800&v=beta&t=nYeaoe5rna_a0nRHB6X5kPBqKPIjEmLcyHjHaa9w7P4'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Erin Hall</span>
                  <small class="h6 text-muted">Co-Founder && Chief Branding Officer</small>
                </h5>
                <div class="mt-3">
                  <base-button tag="a" target="_blank" href="https://www.linkedin.com/in/erinlochall/" type="warning" icon="fa fa-linkedin" rounded
                  icon-only></base-button>
                  <base-button tag="a" target="_blank" href="https://www.facebook.com/unlochall" type="warning" icon="fa fa-facebook" rounded
                  icon-only></base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style>
.shape-container-custom {
  padding-top: 10rem!important;
  padding-bottom: 5rem!important;
}
</style>
