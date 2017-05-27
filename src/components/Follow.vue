<template>
         <div class="newsList">
                <ul>
                     <li v-for="(item,index) in newList">
                        <a href="conText.html">
                            <h2>{{item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </a>
                    </li>    
                </ul>
            </div>

</template>

<script>
    export default {
        data() {
            return {
                newList: []
            }
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                var _this = this;
                this.$http.get('static/data/follow.data').then(function(res) {
                    _this.newList = res.data;
                }).catch(function(err) {
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped>
    .newsList {
        margin-top: 40px;
    }
</style>