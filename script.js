document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. STICKY NAVBAR ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // --- 2. THEME TOGGLE (Dark/Light) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // --- 3. DYNAMIC PROJECT MODAL LOGIC & LIGHTBOX ---
    const projectsData = {
        "1": {
            title: "Campaign Media Sosial PT. Tiga Pilar",
            role: "Editor & Konten Kreator",
            duration: "4 Bulan",
            deliverables: ["Platform TikTok & Reels", "30+ Main Feed Posts", "Analisis Algoritma & Laporan"],
            tags: ["VIDEO EDITING", "CONTENT PLAN", "SOCIAL MEDIA"],
            image: "https://wearemadcraft.com/wp-content/uploads/2024/04/Untitled-5-2048x1106-1.png",
            description: "Proyek ini berfokus pada strategi penayangan video Reels & TikTok PT. Tiga Pilar. Saya mengatur jadwal posting 5x seminggu untuk menyesuaikan algoritma platform. Salah satu Reels mencapai lebih dari 14 ribu tayangan organik, serta beberapa konten mencapai di atas 1 ribu tayangan stabil.",
            links: [
                { text: "Viral Post (14k+ Views) <i class='fa-brands fa-instagram'></i>", url: "https://www.instagram.com/reel/DUkCsSzFJ6b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
                { text: "Highlight Post (1k+ Views) <i class='fa-brands fa-instagram'></i>", url: "https://www.instagram.com/reel/DV0TJclDRlu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
            ],
            galleryTitle: "Hasil Motion Graphics",
            galleryItems: [
                { type: "video", url: "assetvideo/geosynthetis.mp4" },
                { type: "video", url: "assetvideo/geosynthetics2.mp4" },
                { type: "video", url: "assetvideo/tigapilar2.mp4" },
                { type: "video", url: "assetvideo/tigapilar.mp4" }
            ]
        },
        "2": {
            title: "Profile Project Video",
            role: "Videographer & Editor",
            duration: "2 Bulan",
            deliverables: ["Cinematic Profile Video", "Short Movie Project", "Color Grading & Sound Design"],
            tags: ["VIDEOGRAPHY", "CAPCUT", "DIRECTING"],
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            description: "Mengeksekusi proses perekaman visual dan pengeditan secara menyeluruh untuk pembuatan profil. Proses mencakup scriptwriting, directing lapangan, dan pasca produksi menggunakan software standar industri.",
            links: [
                { text: "Watch Full Video <i class='fa-brands fa-youtube'></i>", url: "https://youtu.be/O6DiEJBS3Dk" }
            ],
            galleryTitle: "CUPLIKAN VIDEO PROFIL",
            galleryItems: [
                { type: "youtube", url: "https://youtu.be/O6DiEJBS3Dk?si=qFZCoorpSOZO_YeD" },
                { type: "youtube", url: "https://youtu.be/PaXUHqW2AK8?si=jb9U1Ygr-JcILoOs" },
                { type: "youtube", url: "https://youtu.be/3ZH6dVOHfbQ?si=S7-kqzEMPOeio_G7" },
                { type: "youtube", url: "https://youtu.be/zvOS7wBUp-o?si=o7oW-SZlQB4zSx3h" }
            ]
        },
        "3": {
            title: "Project Design Event dll",
            role: "Graphic Designer",
            duration: "Event Based",
            deliverables: ["Flyer & Banner Acara", "Brosur Publikasi", "Aset Sosial Media"],
            tags: ["GRAPHIC DESIGN", "ILLUSTRATOR", "CANVA"],
            image: "https://deerwalktrainingcenter.com/assets/course_logo_682469d81e826_1747216856.png",
            description: "Membuat sistem desain visual untuk berbagai acara yang mencakup materi cetak (banner, brosur) hingga materi digital untuk kebutuhan pengumuman di Instagram.",
            links: [
                { text: "Behance Portfolio <i class='fa-brands fa-behance'></i>", url: "#" }
            ],
            galleryTitle: "HASIL DESAIN GRAFIS",
            galleryItems: [
                { type: "image", url: "assetgambar/desain1.jpg" },
                { type: "image", url: "assetgambar/desain2.jpg" },
                { type: "image", url: "assetgambar/desain3.jpg" },
                { type: "image", url: "assetgambar/desain4.jpg" },
                { type: "image", url: "assetgambar/desain5.jpg" },
                { type: "image", url: "assetgambar/desain6.jpg" },
                { type: "image", url: "assetgambar/desain7.JPG" },
                { type: "image", url: "assetgambar/desain8.PNG" }
            ]
        },
        "4": {
            title: "Hasil Fotografi / Street Photographer",
            role: "Photographer",
            duration: "Ongoing",
            deliverables: ["Urban Landscape Shots", "Human Interest", "Lightroom Presets"],
            tags: ["PHOTOGRAPHY", "LIGHTROOM"],
            image: "assetfotografi/jakarta.jpg",
            description: "Eksplorasi pribadi dalam menangkap momen jalanan. Berfokus pada komposisi, pencahayaan alami, dan color grading menggunakan Adobe Lightroom untuk menciptakan mood sinematik urban.",
            links: [
                { text: "Instagram Gallery <i class='fa-brands fa-instagram'></i>", url: "https://www.instagram.com/skysounds.w/" }
            ],
            galleryTitle: "HASIL FOTO (GAMBAR)",
            galleryItems: [
                { type: "image", url: "assetfotografi/IMG_7330.JPG" },
                { type: "image", url: "assetfotografi/IMG_7329.JPG" },
                { type: "image", url: "assetfotografi/IMG_7328.JPG" },
                { type: "image", url: "assetfotografi/IMG_7327.JPG" },
                { type: "image", url: "assetfotografi/IMG_7326.JPG" },
                { type: "image", url: "assetfotografi/IMG_7325.JPG" }
            ]
        },
        "5": {
            title: "Project AMV / Motion",
            role: "Video Editor & Motion Designer",
            duration: "Ongoing",
            deliverables: ["Anime Music Video", "Motion Graphics", "Beat Syncing"],
            tags: ["AMV", "Aligh Motion", "MOTION"],
            image: "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ac090c83ad994260a1f7145c7e925d4f_1728908780~tplv-tiktokx-origin.image?dr=9636&x-expires=1779436800&x-signature=L%2FXbdkp6VwdWjEFb068f%2BKDtRFQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=55bbe6a9&idc=useast5",
            description: "Pembuatan Anime Music Video (AMV) dan Motion Graphics yang berfokus pada sinkronisasi audio-visual tingkat tinggi (beat sync), transisi mulus, dan penggunaan efek visual untuk menciptakan pengalaman visual yang intens.",
            links: [
                { text: "Instagram Project 1 <i class='fa-brands fa-instagram'></i>", url: "https://www.instagram.com/p/Cr-zgmQpz60/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
                { text: "Instagram Project 2 <i class='fa-brands fa-instagram'></i>", url: "https://www.instagram.com/tv/CZfZW0xIK5S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
            ],
            galleryTitle: "AMV YOUTUBE HIGHLIGHTS",
            galleryItems: [
                { type: "youtube", url: "https://youtu.be/93C1MVgwxB4?si=GY8nkvrk7gD81eNx" }, 
                { type: "youtube", url: "https://youtu.be/0A5GgwfVDA8?si=vy_Wy_gEsqGpwOSe" }  
            ]
        },
        "6": {
            title: "VibeDeck Music Player",
            role: "Software Developer",
            duration: "Ongoing",
            deliverables: ["Desktop Application", "Firebase Integration", "Modern UI/UX"],
            tags: ["SOFTWARE", "VIBECODING", "FIREBASE"],
            image: "assetgambar/vibedeck-4.png",
            description: "Pembuatan software music player desktop (VibeDeck) dengan antarmuka modern yang dikembangkan melalui vibecoding. Dilengkapi dengan integrasi Firebase untuk penyimpanan data, serta fitur-fitur pemutar musik premium.",
            links: [
                { text: "Download App (Google Drive) <i class='fa-solid fa-download'></i>", url: "https://drive.google.com/file/d/1HZYlJ7pdg6cKGeB6AODd_A6L3vOcPweq/view?usp=drive_link" }
            ],
            galleryTitle: "SCREENSHOT APLIKASI",
            galleryItems: [
                { type: "image", url: "assetgambar/vibedeck-1.png" },
                { type: "image", url: "assetgambar/vibedeck-2.png" },
                { type: "image", url: "assetgambar/vibedeck-3.png" }
            ]
        }
    };

    const getYoutubeId = (url) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    const mTitle = document.getElementById('modal-title');
    const mRole = document.getElementById('modal-role');
    const mDuration = document.getElementById('modal-duration');
    const mDeliverables = document.getElementById('modal-deliverables');
    const mTags = document.getElementById('modal-tags');
    const mImg = document.getElementById('modal-img');
    const mDesc = document.getElementById('modal-desc');
    const mLinks = document.getElementById('modal-links');
    const mGalleryTitle = document.getElementById('modal-gallery-title');
    const mGalleryGrid = document.getElementById('modal-gallery-grid');

    const lightbox = document.getElementById('media-lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeLightboxBtn = document.querySelector('.close-lightbox');

    if(projectCards) {
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const data = projectsData[id];

                if(data) {
                    mTitle.textContent = data.title;
                    mRole.textContent = data.role;
                    mDuration.textContent = data.duration;
                    mImg.src = data.image;
                    mDesc.textContent = data.description;

                    mDeliverables.innerHTML = '';
                    data.deliverables.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        mDeliverables.appendChild(li);
                    });

                    mTags.innerHTML = '';
                    data.tags.forEach(tag => {
                        const span = document.createElement('span');
                        span.textContent = tag;
                        mTags.appendChild(span);
                    });

                    mLinks.innerHTML = '';
                    data.links.forEach(link => {
                        const a = document.createElement('a');
                        a.href = link.url;
                        a.className = 'modal-link-btn';
                        a.innerHTML = link.text;
                        
                        if(link.url.includes('youtube.com') || link.url.includes('youtu.be')) {
                            a.target = '_self'; 
                            a.addEventListener('click', (e) => {
                                e.preventDefault(); 
                                openLightbox('youtube', link.url);
                            });
                        } else {
                            a.target = '_blank';
                        }
                        mLinks.appendChild(a);
                    });

                    mGalleryTitle.textContent = data.galleryTitle || "GALERI PROYEK";
                    mGalleryGrid.innerHTML = ''; 

                    if (data.galleryItems && data.galleryItems.length > 0) {
                        data.galleryItems.forEach(item => {
                            const itemBox = document.createElement('div');
                            
                            if (item.type === 'video') {
                                itemBox.className = 'video-box';
                                itemBox.innerHTML = `
                                    <video src="${item.url}#t=0.1" muted playsinline preload="metadata"></video>
                                    <div class="play-overlay"><i class="fa-solid fa-play"></i></div>
                                `;
                            } else if (item.type === 'youtube') {
                                itemBox.className = 'video-box';
                                const yId = getYoutubeId(item.url);
                                const thumbUrl = yId ? `https://img.youtube.com/vi/${yId}/hqdefault.jpg` : '';
                                itemBox.innerHTML = `
                                    <img src="${thumbUrl}" alt="YouTube Thumbnail">
                                    <div class="play-overlay"><i class="fa-brands fa-youtube"></i></div>
                                `;
                            } else if (item.type === 'image') {
                                itemBox.className = 'gallery-img-box';
                                itemBox.innerHTML = `<img src="${item.url}" alt="Hasil Karya">`;
                            }

                            itemBox.addEventListener('click', () => {
                                openLightbox(item.type, item.url);
                            });

                            mGalleryGrid.appendChild(itemBox);
                        });
                    }

                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; 
                }
            });
        });
    }

    const openLightbox = (type, url) => {
        lightboxContent.innerHTML = ''; 

        if (type === 'image') {
            const img = document.createElement('img');
            img.src = url;
            lightboxContent.appendChild(img);
        } else if (type === 'video') {
            lightboxContent.innerHTML = `
                <video controls autoplay playsinline style="max-width:100%; max-height:90vh; border-radius:8px; outline:none;">
                    <source src="${url}" type="video/mp4">
                    Browser Anda tidak mendukung tag video.
                </video>
            `;
            
            const vidElement = lightboxContent.querySelector('video');
            if(vidElement) {
                const playPromise = vidElement.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Autoplay diblokir, silahkan klik play.");
                    });
                }
            }
        } else if (type === 'youtube') {
            const yId = getYoutubeId(url);
            if(yId) {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${yId}?autoplay=1`;
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                lightboxContent.appendChild(iframe);
            } else {
                lightboxContent.innerHTML = '<p style="color:white;">Video URL Tidak Valid</p>';
            }
        }

        lightbox.classList.add('active');
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        
        const vid = lightboxContent.querySelector('video');
        const iframe = lightboxContent.querySelector('iframe');
        if(vid) vid.pause();
        if(iframe) iframe.src = ''; 
        
        setTimeout(() => {
            lightboxContent.innerHTML = '';
        }, 300);
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; 
    };

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);

    if(modal) {
        modal.addEventListener('click', (e) => {
            if(e.target === modal || e.target.classList.contains('modal-overlay')) closeModal();
        });
    }

    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) closeLightbox();
        });
    }

    // --- 4. SCROLL FADE IN/OUT EFFECT ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const elementsToFade = document.querySelectorAll('.hero-title, .hero-subtitle, .badge, .cta-link, .center-header, .split-left, .split-right, .project-card, .skills-col, .contact-info, .social-links');

    if(elementsToFade) {
        elementsToFade.forEach((el, index) => {
            el.classList.add('fade-scroll');
            if (el.classList.contains('project-card')) {
                el.style.transitionDelay = `${index * 0.1}s`; 
            }
            fadeObserver.observe(el);
        });
    }
});
