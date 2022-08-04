<template>
    <div class="row">
        <div class="col-md-3" style="margin-right: 100px;">
            <SideNav />
        </div>
        <div class="col-md-12">
            <div class="content">
            <h1>Hello Admin</h1>
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade slide" data-mdb-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100"
                            alt="Wild Landscape" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100"
                            alt="Camera" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100"
                            alt="Exotic Fruits" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div>
            </div>
        </div>
    </div>
    <br/><br/><br/>
    <div class="row">
        <div class="col-md-3 col-xs-6">
        </div>
        <div class="col-md-3 col-xs-6">
            <h3>Hi</h3>
            <p>Create a db.json file with some data</p>
        </div>
        <div class="col-md-3 col-xs-6">
            <h3>Hi</h3>
            <p>Create a db.json file with some data</p>
        </div>
        <div class="col-md-3 col-xs-6">
            <h3>Hi</h3>
            <p>Create a db.json file with some data</p>
        </div>
    </div>
</template>
<script>
import SideNav from './SideNav.vue';

export default {
    name: "AdminDash",
    components: { SideNav, }
}
</script>
<style>
.slide {
    width: 600px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;

}


</style>