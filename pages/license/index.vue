<template>
    <div>
        <div class="mb-12 flex h-96 items-center justify-center bg-zinc-100">
            <h1 class="container px-6 text-center text-4xl font-bold">Thông tin bản quyền</h1>
        </div>

        <div class="container flex flex-wrap justify-items items-center justify-between align-middle space-y-1 mx-auto">
            <div>

            </div>
            <div class="flex flex-col gap-6 md:flex-row-reverse">
                <div class="basis-56 lg:basis-72">
                    <div class="top-6 space-y-3 sm:sticky">
                        <form>
                            <TheFilter />
                            <div class="mb-4 mt-10">
                                <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                    class="bg-primary-700 bg-amber-400  text-sm w-48 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    type="button">
                                    Chưa lọc được :(
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div
                        class="flex items-center flex-1 snap-x snap-mandatory gap-6 overflow-x-scroll  sm:overflow-x-hidden sm:px-6 pb-5 font-lexend text-2xl font-bold  underline  decoration-[.2rem] underline-offset-[.2rem]">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input v-model="searchKeyword" type="text" id="search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search  License ..." required>
                            <button @click="searchProducts" type="button"
                                class="absolute inset-y-0 right-0 flex items-center pr-3  bg-gray-200 border border-gray-300 text-gray-900 pl-4 rounded-lg ">
                                Search
                            </button>
                        </div>
                    </div>
                    <div class="flex-1	 snap-x snap-mandatory gap-6 overflow-x-scroll sm:grid sm:grid-cols-2 sm:overflow-x-hidden sm:px-6 md:grid-cols-5"
                        ref="scroll">

                        <div v-for="license in  paginatedData" :key="license.id"
                            class="w-1/3 flex-shrink-0 snap-start scroll-ml-6 sm:w-full">
                            <a :href="'/license/' + license.slug">
                                <div
                                    class="rounded-md h-fit shadow-md bg-gray-200 overflow-hidden relative dark:bg-gray-800 hover:shadow-lg transition-shadow duration-150 ease-linear">
                                    <span
                                        class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-green-400 bg-opacity-50 backdrop-blur text-gray-900 absolute right-2 top-2 ">
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
                                        <div class="text-zinc-500 dark:text-zinc-400 font-black">{{ license.publisher }}
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1"><span class="block text-zinc-500 dark:text-zinc-400 font-black">{{
                                    license.category
                                }}</span>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div class=" flex justify-center items-center mx-auto pb-5 py-5  ">
                        <button @click="prevPage"
                            class="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                            Previous
                        </button>
                        <button @click="nextPage"
                            class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>
<script >
export default {
    setup() {
        const client = useSupabaseClient();
        const listData = ref([]);
        const size = 10;
        const pageNumber = ref(0);
        let pageNumberCount = 0;
        const searchKeyword = ref('');

        onMounted(() => {
            loadData();
        });
        watch(searchKeyword, (newValue) => {
            if (newValue === '') {
                loadData();
            }
        });
        const loadData = async () => {
            let query = client.from('license').select('id, name, publisher, category, created_at, image_li, slug');

            if (searchKeyword.value) {
                query = query.ilike('name', `%${searchKeyword.value}%`);
            }

            const { data: licenses, error } = await query.order('created_at');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                listData.value = licenses;
                pageNumberCount = pageCount();
            }
        };
        const searchProducts = () => {
            pageNumber.value = 0;
            loadData();
        };
        const nextPage = () => {
            if (pageNumber.value < pageNumberCount - 1) {
                pageNumber.value++;
                console.log('Next page:', pageNumber.value);
            }
        };

        const prevPage = () => {
            if (pageNumber.value > 0) {
                pageNumber.value--;
                console.log('Previous page:', pageNumber.value);
            }
        };

        const pageCount = () => {
            const l = listData.value.length;
            return Math.ceil(l / size);
        };

        const paginatedData = computed(() => {
            const start = pageNumber.value * size;
            const end = start + size;
            return listData.value.slice(start, end);
        });

        return {
            listData,
            size,
            pageNumber,
            loadData,
            nextPage,
            prevPage,
            pageCount,
            paginatedData,
            searchKeyword,
            searchProducts,
        };
    },
};
</script>




  
  