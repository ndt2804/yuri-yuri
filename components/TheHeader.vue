<template>
    <nav id="navbar" class="relative z-10 w-full text-neutral-800 font-bold font-mono">
        <div class="flex flex-row max-w-screen-xl px-6 mx-auto  py-3 space-x-4 xl:space-x-8 h-20 ">
            <div class="py-3 text-2xl text-rose-400 space-x-8">
                <NuxtLink to="/">Yuri-ko</NuxtLink>
            </div>
            <ul class="gap-3 flex flex-1 justify-center space-x-4 items-center">
                <li>
                    <NuxtLink to="/">HOME</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/manga">MANGA</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/anime">ANIME</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/license">LICENSE</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">ABOUT</NuxtLink>
                </li>
            </ul>
            <button class="bg-transparent text-rose-400 py-2 px-4 my-2 rounded-full border border-rose-400 items-center ">
                <NuxtLink to="/login">Log In</NuxtLink>
            </button>
            <button class="bg-rose-400 hover:bg-rose-500 text-white py-2 px-4 my-2 rounded-full ">
                <NuxtLink to="/register"> Sign Up </NuxtLink>
            </button>
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