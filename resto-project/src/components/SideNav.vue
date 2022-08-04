<template>
    <Navbar variant="dark" bg="dark" expand="lg"
        className='sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg'>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <div className="d-flex float-left">

        </div>
        <Container fluid>
            <Navbar.Collapse id="navbar-dark-example">
                <div class="logoimg">
                    <img class="logo" src="../assets/resto-logo.png"/>
                </div>
                <div className="navbar-collapse row m-auto ">
                    <div className="navbar-nav col-md-10 ">
                        
                        <a href="/dashboard"
                            className="nav-item dash-link nav-link active bg-secondary d-flex float-left"> Dashboard</a>
                        <a href="/restmanage" className="nav-item nav-link dash-link d-flex float-left"> Add Restaurant </a>
                        <a href="/dashboard" className="nav-item nav-link dash-link d-flex float-left"> Edit </a>
                        <a href="/dashboard" className="nav-item nav-link dash-link d-flex float-left"> Mode </a>
                    </div>

                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</template>
<script>
export default {
    name: "SideNav",
   
}
</script>
<style>
.logoimg{
    display: grid;
    place-items: center;
}
</style>
