// store/license.ts
import { defineStore } from 'pinia';
import { License } from '@/types/supabase';

export const useLicenseStore = defineStore('license', {
    state: () => ({
        listData: [] as License[],
        size: 10,
        pageNumber: 0,
        pageNumberCount: 0,
        searchKeyword: '',
        loading: false,
    }),

    actions: {
        async loadData() {
            this.loading = true;
            const client = useSupabaseClient();
            let query = client
                .from('license')
                .select('id, name, publisher, category, created_at, image_li, slug');

            if (this.searchKeyword) {
                query = query.ilike('name', `%${this.searchKeyword}%`);
            }

            const { data: licenses, error } = await query.order('created_at');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                this.listData = licenses;
                this.pageNumberCount = this.pageCount();
            }
            this.loading = false;
        },

        pageCount() {
            const l = this.listData.length;
            return Math.ceil(l / this.size);
        },
        searchProducts() {
            this.pageNumber = 0;
            this.loadData();
        },

    },
});


