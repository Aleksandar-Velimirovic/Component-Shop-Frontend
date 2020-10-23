<template>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
         <template v-slot:default="{ hide }">
            <div class="p-3">
                <nav class="mb-3">
                    <b-nav vertical>
                    <b-nav-item>Login</b-nav-item>
                    <b-nav-item>Register</b-nav-item>
                    <b-nav-item>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </b-nav-item>
                    </b-nav>
                </nav>
                <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
            </div>
        </template>
    </b-sidebar>
</template>
