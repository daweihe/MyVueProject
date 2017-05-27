<template>
      <div class="content">
          <banner></banner>
            <div class="newsList">
                <ul>
                    <li v-for="(item,index) in newList">
                       <router-link :to="'/article/'+item.id">
                            <h2>{{item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </router-link>
                    </li>    
                </ul>
            </div>
      </div>
</template>

<script>
    import banner from './Banner';

    export default {
        data() {
            return {
                newList: []
            }
        },
        components: {
            banner
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                var _this = this;
                this.$http.get('static/data/index.data').then(function(res) {
                    _this.newList = res.data;
                }).catch(function(err) {
                    console.log(err);
                });
            }
        }
    }
</script>

<style>

</style>