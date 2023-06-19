<template>
    <nav id="navbar" class="relative z-10 w-full text-neutral-800">
        <div class="flex flex-row max-w-screen-xl px-8 mx-auto  py-4 space-x-4 xl:space-x-8 ">
            <div class="font-mono font-bold  py-6  text-2xl text-rose-400  gap-3 space-x-8">
                <NuxtLink to="/">Yuri-ko</NuxtLink>
            </div>
            <ul class="gap-3 flex flex-1 justify-center font-mono  space-x-4 items-center">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">Manga</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Anime</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/license">License</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">About</NuxtLink>
                </li>
            </ul>
            <button
                class="bg-transparent text-rose-400 font-mono font-bold py-2 px-4 my-8 mx-4 rounded-full border border-rose-400  ">
                <NuxtLink to="/login">Log In</NuxtLink>
            </button>
            <button class="bg-rose-400 hover:bg-rose-500 text-white font-mono font-bold py-2 px-4 my-8 mx-4 rounded-full ">
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