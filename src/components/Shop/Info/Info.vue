<template>
    <div class="cart-info">
        <div>
            <div class='item'>总数：<strong>{{cartInfos.total_nums}}</strong></span></div>
            <div class='item'>总价：<strong>{{cartInfos.total_price}}</strong></span></div>

            <div class="item pull-right btn btn-danger" @click='clear_db'>清空购物车</div>
        </div>
    </div>
</template>
<script>
    import InfoJs from './Info.js';
    export default InfoJs;
</script>
<style scoped lang='less'>
    .cart-info{
        font-size: 20px;
        text-align: left;

        .item{
            display: inline-block;
            margin-right: 20px;
        }
    }
</style>
