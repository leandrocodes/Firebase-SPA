<template>
    <div class="base-spinner fa-3x">
        <i class="fas fa-circle-notch fa-spin"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    created() {
        this.$root.$on('Spiner::show', () =>{
            this.visible = true
        })

        this.$root.$on('Spiner::hide', () =>{
            this.visible = false
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.base-spinner {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $dark-medium;
    color: $featured;
    z-index: 120;
}
</style>