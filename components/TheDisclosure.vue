<template>
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions
                </h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Dưới đây là một số câu hỏi thường
                    gặp
                </p>
            </div>
            <div class="w-full px-4 max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Trang web phục vụ cho ai?</span>
                            <Icon :class="open ? 'rotate-90 transform' : ''" class="h-5 w-5 text-purple-500"
                                name="heroicons:chevron-right-20-solid" />

                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Trang web này dành cho tất cả mọi người yêu quý thể loại Yuri, có nhu cầu tìm hiểu và cần biết
                            những thông tin về thể loại này
                        </DisclosurePanel>
                    </Disclosure>

                    <Disclosure as="div" class="mt-2" v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Bạn có tài khoản chưa?</span>
                            <Icon :class="open ? 'rotate-90 transform' : ''" class="h-5 w-5 text-purple-500"
                                name="heroicons:chevron-right-20-solid" />
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Nếu có vui lòng hãy đăng nhập, nếu chưa thì hãy tạo ngay cho mình một chiếc tài khoản thật xinh
                            xẻo
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" class="mt-2" v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Trang web có thu phí không?</span>
                            <Icon :class="open ? 'rotate-90 transform' : ''" class="h-5 w-5 text-purple-500"
                                name="heroicons:chevron-right-20-solid" />
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Câu trả lời tất nhiên là không?
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" class="mt-2" v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Tôi có thể ủng hộ bằng cách nào</span>
                            <Icon :class="open ? 'rotate-90 transform' : ''" class="h-5 w-5 text-purple-500"
                                name="heroicons:chevron-right-20-solid" />
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Trang web được duy phí bởi phí cá nhân, nếu bạn có lòng ủng hộ phí duy trì trang web,
                            hãy liên hệ Admin!
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
            <p class="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#"
                    title=""
                    class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact
                    our support</a></p>
        </div>
    </section>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

</script>
  