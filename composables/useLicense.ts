import { ref, onMounted } from 'vue';
interface License {
    id: number;
    name: string;
    publisher: string;
    category: string;
    created_at: string;
    image_li: string;
}
export default function useLicense() {
    const data = ref<License[]>([]);
    const pending = ref(false);
    const error = ref();
    const fetchLicenses = async () => {
        pending.value = true;

        try {
            const response = await $fetch<License[]>('http://localhost:1020/api/v1/license');
            data.value = response
        } catch (e) {
            error.value = 'Error fetching licenses';
        } finally {
            pending.value = false;
        }
    };
    onMounted(() => {
        fetchLicenses();
    });
    return {
        data,
        pending,
        error,
    };
}
