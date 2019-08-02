<template>
<footer class="footer">

  <div class="container">
    <div class="row row-grid align-items-center my-md">
      <div class="col-lg-6">
        <!-- <h3 class="text-primary font-weight-light mb-2">Thank you for supporting us!</h3> -->
        <h4 class="mb-0 font-weight-light">Keep in touch on our social platforms</h4>
      </div>
      <div class="col-lg-6 text-lg-right btn-wrapper">
        <a target="_blank" rel="noopener" href="https://twitter.com/Fervent_Fox"
          class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
          data-original-title="Follow us">
          <i class="fa fa-twitter"></i>
        </a>
        <a target="_blank" rel="noopener" href="https://www.facebook.com/ferventfox"
          class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
          data-original-title="Like us">
          <i class="fa fa-facebook-square"></i>
        </a>
        <a target="_blank" rel="noopener" href="https://www.instagram.com/ferventfoxmkt/"
          class="btn btn-neutral btn-icon-only btn-instagram btn-lg btn-round" data-toggle="tooltip"
          data-original-title="Follow us">
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    </div>
    <hr>
    <div class="row align-items-center justify-content-md-between">
      <div class="col-md-6">
        <div class="copyright">
          &copy; {{year}}
          <a> Fervent Fox Marketing, LLC</a>
        </div>
      </div>
      <div class="col-md-6">
        <ul class="nav nav-footer justify-content-end">
          <li class="nav-item">
            <router-link :to="{name: 'about'}" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'contact'}" class="nav-link">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'privacy'}" class="nav-link">Privacy Policy</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'terms'}" class="nav-link">Terms of Service</router-link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
name: 'app-footer',
data() {
  return {
    year: new Date().getFullYear()
  }
}
};
</script>
<style>
</style>
