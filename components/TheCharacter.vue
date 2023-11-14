<template>
    <div class="container mt-12 mx-auto px-12 py-10">
        <section class="lg:py-16">
            <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 class=" text-red-400 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span class=" text-transparent bg-clip-text  bg-gradient-to-r from-pink-600 to-violet-400">
                            Hello, I&apos;m
                        </span>
                        <br />
                        <span :style="{ letterSpacing: showCursor ? '0' : '0.5em' }">{{ currentCharacter.name }}</span>
                        <span v-if="showCursor" class="cursor">|</span>
                    </h1>
                    <p class="text-violet-400 text-base sm:text-lg mb-6 lg:text-xl font-semibold">
                        {{ currentCharacter.anime }}
                    </p>

                </div>
                <div class="col-span-4 place-self-center mt-4 lg:mt-0" style="opacity: 1; transform: none;">
                    <div class="rounded-full  w-[450px] h-[450px] lg:w-[400px] lg:h-[400px] relative ">
                        <img alt="hero image" width="450" height="450"
                            class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            :src="currentCharacter.imageSrc" style="object-fit: cover;" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script lang="ts">
export default {
    data() {
        return {
            roles: [""],
            currentRole: "",
            showCursor: true,
            characters: [
                {
                    name: 'Karen Helvetius',
                    imageSrc: '/character/karen.png',
                    anime: 'Hikikomari Kyuuketsuki no Monmon',
                },
                {
                    name: 'Terkomari',
                    imageSrc: '/character/terakomori.png',
                    anime: 'Hikikomari Kyuuketsuki no Monmon',
                },
                {
                    name: 'Villhaze',
                    imageSrc: '/character/vii.png',
                    anime: 'Hikikomari Kyuuketsuki no Monmon',
                },
                {
                    name: 'Sakuna Memoire',
                    imageSrc: '/character/sakuna.png',
                    anime: 'Hikikomari Kyuuketsuki no Monmon',
                },
                {
                    name: 'Millicent Bluenight',
                    imageSrc: '/character/millicent.png',
                    anime: 'Hikikomari Kyuuketsuki no Monmon',
                },
                {
                    name: 'Euphyllia Magenta',
                    imageSrc: '/character/euphilia.png',
                    anime: 'Tensei Ōjo to Tensai Reijō no Mahō Kakumei',
                },
                {
                    name: 'Anisphia Palletia',
                    imageSrc: '/character/anisphere.png',
                    anime: 'Tensei Ōjo to Tensai Reijō no Mahō Kakumei',
                },
                {
                    name: 'Ilia Coral',
                    imageSrc: '/character/illia.png',
                    anime: 'Tensei Ōjo to Tensai Reijō no Mahō Kakumei',
                },
                {
                    name: 'Lainie Cyan',
                    imageSrc: '/character/leini.png',
                    anime: 'Tensei Ōjo to Tensai Reijō no Mahō Kakumei',
                },

                {
                    name: 'Claire François',
                    imageSrc: '/character/claire.webp',
                    anime: 'Watashi no Oshi wa Akuyaku Reijou.',
                },
                {
                    name: 'Rae Taylor',
                    imageSrc: '/character/taylor.webp',
                    anime: 'Watashi no Oshi wa Akuyaku Reijou.',
                },
            ],
            currentIndex: 0,
        };
    },

    mounted() {
        this.rotateCharacters(); // Bắt đầu xoay tên nhân vật

    },
    computed: {
        currentCharacter() {
            return this.characters[this.currentIndex];
        }
    },
    methods: {
        changeCharacter() {
            this.currentIndex = (this.currentIndex + 1) % this.characters.length;
        },

        async rotateCharacters() {
            while (true) {
                for (let i = 0; i < this.characters.length; i++) {
                    await this.showCharacterName(this.characters[i].name);
                    await this.pause(2000); // Đợi 2 giây
                    await this.eraseCharacterName();
                }
            }
        },
        async showCharacterName(name: String) {
            for (let i = 0; i <= name.length; i++) {
                this.currentCharacter.name = name.slice(0, i);
                const foundCharacter = this.characters.find(char => char.name === name);

                if (foundCharacter) {
                    this.currentCharacter.imageSrc = foundCharacter.imageSrc; // Đồng bộ hình ảnh
                    this.currentCharacter.anime = foundCharacter.anime; // Đồng bộ anime

                } await this.pause(100); // Thời gian chờ giữa mỗi ký tự
            }
        },
        async eraseCharacterName() {
            const name = this.currentCharacter.name;
            for (let i = name.length; i >= 0; i--) {
                this.currentCharacter.name = name.slice(0, i);
                await this.pause(50); // Thời gian chờ giữa mỗi ký tự xóa
            }
        },
        pause(ms: any) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
    },
};
</script>
  
<style scoped>
.cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>
  