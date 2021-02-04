<template>
    <div>
        <div class="album py-5" style="margin-top:150px;">
            <h4 class="text-center" style="font-size:24px;font-family:Roboto;"><b>Comments</b></h4>
            <div v-for="comment in product.comments" :key="comment.id" class="list-group list-group-flush">
                <div class="list-group-item" style="border-bottom:thin solid;border-color:#d9d9d9;display:flex;justify-content:space-between;">
                    <div style="width:20%;">
                        <div v-if="comment.rating">
                            <h4>{{comment.rating.rating}}</h4><span></span>
                        </div>
                        <b-progress v-if="comment.rating" class="mt-2" max="5" style="width:100px;margin-bottom:5px;">
                            <b-progress-bar :value="comment.rating.rating" variant="warning"></b-progress-bar>
                        </b-progress>
                    </div>
                    <div style="padding-top:30px;">
                        <span>{{comment.content}}</span>
                    </div>
                </div>
                <!-- <div class="text-grey-dark leading-normal text-sm" style="margin-left:2px;">
                    <p style="display:flex;"><span style="width=20%;">{{comment.user.first_name}} {{ comment.created_at}}</span>
                        <b-progress v-if="comment.rating" class="mt-2" max="5" style="position:absolute;right:15px;width:100px;">
                            <b-progress-bar :value="comment.rating.rating" variant="warning" show-value ></b-progress-bar>
                        </b-progress>
                    </p>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['product'],
}
</script>

<style>

</style>