<!-- <template>
    <div class="flex h-[80vh] my-10 items-center justify-center p-5 bg-white w-full">
        <div class="text-center mb-40">
            <div class="flex rounded-full">
                <img src="~/public/assets/404.png" class="h-[40vh] mt-auto">
            </div>
            <h1 class="text-[36px] font-bold text-slate-800 lg:text-[50px] py-4 text-purple-400">Upcoming</h1>
            <p class="text-slate-600  lg:text-lg text-pink-600	font-bold">Trang chủ đang trong quá trình phát triển
                <br />mong bạn
                ghé lại sau.
            </p>
        </div>
    </div>
</template> -->
<template>
    <div>
        <div class="mb-12 flex h-96 items-center justify-center bg-zinc-100">
            <h1 class="container px-6 text-center text-4xl font-bold">Thông tin bản quyền</h1>
        </div>

        <div class="container flex flex-wrap justify-items items-center justify-between align-middle space-y-1 mx-auto">

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
                    <div v-for="license in  data" :key="license.id"
                        class="w-1/3 flex-shrink-0 snap-start scroll-ml-6 sm:w-full">
                        <div
                            class="rounded-md h-fit shadow-md bg-gray-200 overflow-hidden relative dark:bg-gray-800 hover:shadow-lg transition-shadow duration-150 ease-linear">
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
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
interface License {
    id: number;
    name: string;
    publisher: string;
    category: string;
    created_at: string;
    image_li: string;
}
const { pending, data, error } = await useFetch<License[]>('http://165.22.106.18:1020/api/v1/license');
</script>