<template>
    <a>
        <slot :text="gettingmessage">Demander une démo</slot>
    </a>
</template>

<script setup>
    const gettingmessage='Demander une démo'
</script>

<style lang="scss" scoped>
    a{
        background-color: #205af9e5;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        }
        
    a:hover{
        color: #205af9e5;
        background-color: #fff;
        border: solid 1px #205af9e5;

    }
    @media (max-width: 900px) {
        a{
        padding: 5px 5px;
        border-radius: 10px;
        font-size: 18px;
        width: 50%;
        }
    }
    @media (max-width: 500px) {
        a{
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 11px;
        width: 130px;
        }
    }
</style>