# Building a Personal Blog with `Hexo`

[中文](./README.md)

> Live blog: [isKage`Blog](https://blog/iskage/online/)

`Hexo`, `butterfly`, `node.js`, `oss`, `Markdown`, `js & css`

## 1. Notes

### 1.1 About PDF Display

The PDF files on this blog are stored in Alibaba Cloud's **OSS Object Storage**. Since OSS services in mainland China do not offer file previews unless a custom domain is bound, and mainland domain names cannot be bound to OSS buckets without filing, I chose to store the files in **Hong Kong OSS Object Storage**.

### 1.2 About Image Display

The images on this blog are mostly stored in Alibaba Cloud's **OSS Object Storage**. OSS services in all regions provide image preview functionality, so images load quickly.

For images displayed in `Markdown` files, I use `PicGo + OSS` to build an image hosting service, paired with `Typora`, which is very convenient. A detailed tutorial will be updated soon...

### 1.3 About `Downloads and Reprints`

Since my blog uses static page rendering and does not set any permissions, all files displayed on the blog can be downloaded by right-clicking.

## 2. Blog Display

Homepage

![](https://blog-iskage.oss-cn-hangzhou.aliyuncs.com/images/QQ_1737362097565.png)


![](https://blog-iskage.oss-cn-hangzhou.aliyuncs.com/images/QQ_1737362146995.png)