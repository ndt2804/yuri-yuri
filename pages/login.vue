<template>
    <div class="flex h-screen items-center justify-center">
        <div class="w-full min-w-fit max-w-sm rounded-lg bg-zinc-200 p-6 dark:bg-zinc-700">
            <h2 class="mb-6 text-4xl font-bold items-center">Đăng nhập</h2>
            <form class="space-y-3">
                <div class="space-y-1">
                    <label class="block" for="email">Email</label>
                    <input id="email"
                        class="focus:ring-primary w-full rounded-xl border-none bg-zinc-300 transition-all invalid:ring-2 invalid:ring-red-400 focus:bg-zinc-100 focus:ring-2 dark:bg-zinc-600 focus:dark:bg-zinc-700"
                        type="email" placeholder="haneko.dev@gmail.vn" />
                </div>
                <div class="space-y-1">
                    <label class="block" for="password">Mật khẩu</label>
                    <input id="password"
                        class="focus:ring-primary w-full rounded-xl border-none bg-zinc-300 transition-all focus:bg-zinc-100 focus:ring-2 dark:bg-zinc-600 focus:dark:bg-zinc-700"
                        type="password" placeholder="haneko" />
                </div>
            </form>
            <button
                class="bg-sky-500/50  rounded-xl py-2 px-3 mt-8 w-full flex justify-center text-gray-100 p-3  font-semibold"
                type="submit">Đăng nhập</button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "custom",
});
</script>