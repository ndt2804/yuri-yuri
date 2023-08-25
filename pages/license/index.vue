<template>
    <div>
        <div class="mb-12 flex h-96 items-center justify-center bg-zinc-100">
            <h1 class="container px-6 text-center text-4xl font-bold">Thông tin bản quyền</h1>
        </div>
        <div class="container flex flex-wrap justify-items items-center justify-between align-middle space-y-1 mx-auto">
            <form
                class="flex items-center flex-1 snap-x snap-mandatory gap-6 overflow-x-scroll  sm:overflow-x-hidden sm:px-6 pb-5 font-lexend text-2xl font-bold flex items-center gap-3 underline decoration-tanaamber-400 decoration-[.2rem] underline-offset-[.2rem]">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="voice-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos, Design Templates..." required>
                </div>

            </form>
            <div class="flex flex-col gap-6 md:flex-row-reverse">
                <div class="basis-56 lg:basis-72">
                    <div class="top-6 space-y-3 sm:sticky">
                        <h3 class="font-kanit text-2xl">Fillter</h3>
                        <div data-headlessui-state=""><button class="mb-3 flex w-full items-center justify-between"
                                id="headlessui-disclosure-button-:r0:" type="button" aria-expanded="false"
                                data-headlessui-state="">
                                <h3 class="mb-1">State</h3><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 16 16" class="text-2xl transition-transform duration-100 " height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                    </path>
                                </svg>
                            </button></div>
                        <div data-headlessui-state=""><button class="mb-3 flex w-full items-center justify-between"
                                id="headlessui-disclosure-button-:r1:" type="button" aria-expanded="false"
                                data-headlessui-state="">
                                <h3 class="mb-1">Category</h3><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 16 16" class="text-2xl transition-transform duration-100 "
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                    </path>
                                </svg>
                            </button></div>
                        <div data-headlessui-state=""><button class="mb-3 flex w-full items-center justify-between"
                                id="headlessui-disclosure-button-:r2:" type="button" aria-expanded="false"
                                data-headlessui-state="">
                                <h3 class="mb-1">Publisher</h3><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 16 16" class="text-2xl transition-transform duration-100 "
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                    </path>
                                </svg>
                            </button></div>
                    </div>
                </div>

                <div
                    class="flex-1 snap-x snap-mandatory gap-6 overflow-x-scroll sm:grid sm:grid-cols-3 sm:overflow-x-hidden sm:px-6 md:grid-cols-5">

                    <div v-for="license in  licenses" :key="license.id"
                        class="w-1/3 flex-shrink-0 snap-start scroll-ml-6 sm:w-full">
                        <a :href="'/license/' + license.slug">
                            <div
                                class="rounded-md h-fit shadow-md bg-gray-200 overflow-hidden relative dark:bg-gray-800 hover:shadow-lg transition-shadow duration-150 ease-linear">
                                <span
                                    class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-green-400 bg-opacity-50 backdrop-blur text-gray-900 absolute right-2 top-2 backdrop-blur">
                                    {{
                                        license.category
                                    }}
                                </span>
                                <img :src="license.image_li" onerror="this.setAttribute('data-error', 1)" loading="lazy"
                                    data-nuxt-img="" sizes="(max-width: 640px) 40vw, (max-width: 768px) 20vw, 10vw"
                                    :srcset="license.image_li" class="aspect-[2/3] h-full w-full object-cover">
                            </div>
                            <div class="mt-2">
                                <div class="space-y-1">
                                    <div class="font-condensed text-xl font-black">{{ license.name }}</div>
                                    <div class="text-zinc-500 dark:text-zinc-400 font-black">{{ license.publisher }}</div>
                                </div>
                            </div>
                            <div class="mt-1"><span class="block text-zinc-500 dark:text-zinc-400 font-black">{{
                                license.category
                            }}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
const client = useSupabaseClient()
const { data: licenses } = await useAsyncData('license', async () =>
    client.from('license').select('id, name, publisher, category, created_at, image_li, slug').order('created_at'), { transform: result => result.data })
</script>