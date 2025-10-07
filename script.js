document.addEventListener('DOMContentLoaded', (event) => {
    console.log("CV Arif Muhammad Ibadurahman telah dimuat. Siap untuk dieksplorasi dengan interaktivitas tambahan!");

    // ===========================================
    // 1. Efek Hover Gambar Profil (Sudah ada di versi sebelumnya)
    // ===========================================
    const profileImg = document.getElementById('profileImage');
    if (profileImg) {
        profileImg.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });

        profileImg.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // ===========================================
    // 2. Toggle Detail Pengalaman (Collapse/Expand)
    // ===========================================
    const toggleButtons = document.querySelectorAll('.toggle-detail-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Cari list detail yang berdekatan (sibling)
            const detailList = this.nextElementSibling; 

            if (detailList && detailList.tagName === 'UL') {
                if (detailList.style.display === 'none' || detailList.style.display === '') {
                    detailList.style.display = 'block';
                    this.textContent = 'Sembunyikan Detail (-)';
                } else {
                    detailList.style.display = 'none';
                    this.textContent = 'Lihat Detail (+)';
                }
            }
        });
    });

    // Sembunyikan semua detail di awal
    document.querySelectorAll('.experience .item ul, .mini-projects ul').forEach(ul => {
        ul.style.display = 'none';
    });

    // ===========================================
    // 3. Highlight Keahlian saat di-klik
    // ===========================================
    const skillDescriptions = document.querySelectorAll('.skills p');

    skillDescriptions.forEach(p => {
        p.addEventListener('click', function() {
            // Hapus highlight dari semua elemen lain
            skillDescriptions.forEach(desc => {
                desc.style.backgroundColor = 'transparent';
                desc.style.fontWeight = 'normal';
                desc.style.borderRadius = '0';
            });

            // Tambahkan highlight ke elemen yang di-klik
            this.style.backgroundColor = '#dceefc'; // Warna biru muda
            this.style.fontWeight = 'bold';
            this.style.borderRadius = '5px';
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // ===========================================
    // 4. Tombol Back-to-Top
    // ===========================================
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTopBtn';
    backToTopButton.textContent = '🔝';
    document.body.appendChild(backToTopButton);

    // Styling tombol (perlu ditambahkan di CSS juga)
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '30px';
    backToTopButton.style.display = 'none';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.fontSize = '24px';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.backgroundColor = '#1a4d2e';
    backToTopButton.style.color = 'white';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    backToTopButton.style.zIndex = '1000';


    // Tampilkan/Sembunyikan tombol saat scroll
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Fungsi saat tombol di-klik
    backToTopButton.onclick = function() {
        document.body.scrollTop = 0; // Untuk Safari
        document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
    };
});