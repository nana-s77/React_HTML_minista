import { defineConfig } from "minista"

export default defineConfig({
  base: "/", // string
  public: "public", // string
  out: "dist", // string
  root: {
    srcDir: "src", // string
    srcName: "root", // string
    srcExt: ["tsx", "jsx"], // string[]
  },
  pages: {
    srcDir: "src/pages", // string
    srcExt: ["tsx", "jsx", "md", "mdx"], // string[]
  },
  assets: {
    entry: "", // string | string[] | { [key: string]: string }
    outDir: "assets", // string
    bundle: {
      outName: "bundle", // string
    },
    images: {
      outDir: "assets/images", // string
      outName: "[name]", // string
    },
    fonts: {
      outDir: "assets/fonts", // string
      outName: "[name]", // string
    },
    svgr: {
      svgrOptions: {}, // https://react-svgr.com/docs/options/
    },
    icons: {
      useSprite: true, // boolean
      srcDir: "src/assets/icons", // string
      outDir: "assets/images", // string
      outName: "icons", // string
      svgstoreOptions: {
        cleanSymbols: ["fill", "stroke", "stroke-linejoin", "stroke-width"],
      }, // https://github.com/svgstore/svgstore#svgstore-options
    },
    download: {
      useRemote: false, // boolean
      remoteUrl: ["https://", "http://"], // string[]
      remoteName: "remote-[index]", // string
      outDir: "assets/images", // string
    },
  },
  vite: {
    build: {
      minify: false, // minify設定上書き
    },
    esbuild: {
      minify: false,
      minifySyntax: false,
    },
  }, // https://vitejs.dev/config/
  markdown: {
    syntaxHighlighter: "highlight", // "highlight" | "none"
    highlightOptions: {}, // https://github.com/rehypejs/rehype-highlight#options
    mdxOptions: {
      remarkPlugins: [], // https://mdxjs.com/packages/mdx/#optionsremarkplugins
      rehypePlugins: [], // https://mdxjs.com/packages/mdx/#optionsrehypeplugins
    },
  },
  beautify: {
    useHtml: true, // boolean
    useAssets: false, // boolean
    htmlOptions: {
      indent_size: 2,
      max_preserve_newlines: 0,
      indent_inner_html: true,
      extra_liners: [],
      inline: ["span", "b", "br", "code", "del", "s", "small", "strong", "wbr"],
    }, // https://github.com/beautify-web/js-beautify#css--html
    cssOptions: {}, // https://github.com/beautify-web/js-beautify#css--html
    jsOptions: {}, // https://github.com/beautify-web/js-beautify#options
  },
})
