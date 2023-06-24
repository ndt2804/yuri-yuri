<template>
    <nav id="navbar" class="relative z-10 w-full text-neutral-800 font-bold font-mono">
        <div class="flex flex-row max-w-screen-xl px-6 mx-auto  py-3 space-x-4 xl:space-x-8 h-20 ">
            <div class="py-3 text-2xl text-rose-400 space-x-8">
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