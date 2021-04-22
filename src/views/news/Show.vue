<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
          class="page-header-image"
          style="background-image:url('img/bg5.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/ryan.jpg" alt="" />
        </div>
        <h3 class="title">Ryan Scheinder</h3>
        <p class="category">Photographer</p>
        <div class="content">
          <div class="social-description">
            <h2>26</h2>
            <p>Comments</p>
          </div>
          <div class="social-description">
            <h2>26</h2>
            <p>Comments</p>
          </div>
          <div class="social-description">
            <h2>48</h2>
            <p>Bookmarks</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ APIData.title }}</h2>
            <h5 class="description" v-html="APIData.content">

            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
<!--        <div class="section-story-overview">-->
<!--          <div class="row">-->
<!--            <div class="col-md-6">-->
<!--              <div-->
<!--                class="image-container image-left"-->
<!--                style="background-image: url('img/login.jpg')"-->
<!--              >-->
<!--                &lt;!&ndash; First image on the left side &ndash;&gt;-->
<!--                <p class="blockquote blockquote-primary">-->
<!--                  "Over the span of the satellite record, Arctic sea ice has-->
<!--                  been declining significantly, while sea ice in the-->
<!--                  Antarctichas increased very slightly"-->
<!--                  <br />-->
<!--                  <br />-->
<!--                  <small>-NOAA</small>-->
<!--                </p>-->
<!--              </div>-->
<!--              &lt;!&ndash; Second image on the left side of the article &ndash;&gt;-->
<!--              <div-->
<!--                class="image-container"-->
<!--                style="background-image: url('img/bg3.jpg')"-->
<!--              ></div>-->
<!--            </div>-->
<!--            <div class="col-md-5">-->
<!--              &lt;!&ndash; First image on the right side, above the article &ndash;&gt;-->
<!--              <div-->
<!--                class="image-container image-right"-->
<!--                style="background-image: url('img/bg1.jpg')"-->
<!--              ></div>-->
<!--              <h3>-->
<!--                So what does the new record for the lowest level of winter ice-->
<!--                actually mean-->
<!--              </h3>-->
<!--              <p>-->
<!--                The Arctic Ocean freezes every winter and much of the sea-ice-->
<!--                then thaws every summer, and that process will continue whatever-->
<!--                happens with climate change. Even if the Arctic continues to be-->
<!--                one of the fastest-warming regions of the world, it will always-->
<!--                be plunged into bitterly cold polar dark every winter. And-->
<!--                year-by-year, for all kinds of natural reasons, there’s huge-->
<!--                variety of the state of the ice.-->
<!--              </p>-->
<!--              <p>-->
<!--                For a start, it does not automatically follow that a record-->
<!--                amount of ice will melt this summer. More important for-->
<!--                determining the size of the annual thaw is the state of the-->
<!--                weather as the midnight sun approaches and temperatures rise.-->
<!--                But over the more than 30 years of satellite records, scientists-->
<!--                have observed a clear pattern of decline, decade-by-decade.-->
<!--              </p>-->
<!--              <p>-->
<!--                The Arctic Ocean freezes every winter and much of the sea-ice-->
<!--                then thaws every summer, and that process will continue whatever-->
<!--                happens with climate change. Even if the Arctic continues to be-->
<!--                one of the fastest-warming regions of the world, it will always-->
<!--                be plunged into bitterly cold polar dark every winter. And-->
<!--                year-by-year, for all kinds of natural reasons, there’s huge-->
<!--                variety of the state of the ice.-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Here is our team</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/avatar.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Romina Hadid</h4>
                <p class="category text-primary">Model</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/ryan.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Ryan Tompson</h4>
                <p class="category text-primary">Designer</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/eva.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Eva Jenner</h4>
                <p class="category text-primary">Fashion</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { getAPI } from "@/axios-api";

export default {
  name: 'News-show',
  bodyClass: 'news-show',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      APIData: []
    };
  },
  created() {
    getAPI.get('/news/' + this.$route.params.slug )
    .then(response => {
      console.log('news received');
      this.APIData = response.data
    })
    .catch(err => {
      console.log(err)
    })
  }
};
</script>
<style></style>
