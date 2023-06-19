<template>
    <nav id="navbar" class="relative z-10 w-full text-neutral-800">
        <div class="flex flex-row max-w-screen-xl px-8 mx-auto  py-4 space-x-4 xl:space-x-8 ">
            <div class="font-mono font-bold  py-6  text-2xl text-rose-400  gap-3 space-x-8">
                <NuxtLink to="/">Yuri-ko</NuxtLink>
            </div>
        </div>

    </nav>
</template>

  
<script lang="ts">
export default {
    name: 'Navbar',
}
</script>
<style scoped>
.router-link-active {
    @apply font-bold;
}
</style>