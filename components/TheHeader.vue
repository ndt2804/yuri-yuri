<template>
    <nav id="navbar" class="top-0 z-30 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto grid grid-cols-2 items-center px-6 py-3 lg:grid-cols-6">
            <div class="flex items-center justify-start gap-3">
                <TheLogo />
                <!-- <img src="~/assets/logo.png" class="h-12"> -->
            </div>
            <ul class="col-span-4 hidden items-center justify-center gap-3 lg:flex md:flex md:gap-x-6">
                <li>
                    <NuxtLink to="/" class="rounded-lg px-3 py-2 transition-all hover:bg-zinc-200 hover:dark:bg-zinc-700">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/yuri"
                        class="rounded-lg px-3 py-2 transition-all hover:bg-zinc-200 hover:dark:bg-zinc-700">Yuri
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/license"
                        class="rounded-lg px-3 py-2 transition-all hover:bg-zinc-200 hover:dark:bg-zinc-700">License
                    </NuxtLink>
                </li>
            </ul>
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

    font-family: Inter;
}
</style>