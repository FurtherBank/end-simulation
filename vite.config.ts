import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react'  
import vitePluginImp from 'vite-plugin-imp'  

// https://vitejs.dev/config/  
export default defineConfig({  
  plugins: [  
    react(),  
    vitePluginImp({  
      libList: [  
        {  
          libName: 'antd',  
          style: (name: string) => `antd/es/${name}/style/index`,  
        },  
      ],  
    }),  
  ],  
  css: {  
    preprocessorOptions: {  
      less: {  
        // 如果需要定制主题，可以在这里添加  
        javascriptEnabled: true,  
      },  
    },  
  },  
})