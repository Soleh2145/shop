// games.js - Game data and related functions
const games = [
    { id: 1, title: "Gamemode Dari Nol.", genre: "Custom Scripting", price: 200000, discount: 10, image: "bahan/fifa23.png", featured: true, promo: false, description: "Pembuatan gamemode SA-MP dari nol dengan sistem seperti  gamemode untuk kebutuhan training pd atau keperluan lainnya, dan Maksimall update dalam 1 minggu saja", rating: 5.0, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["PAWN", "MySQL"] },
    { id: 2, title: "Custom Textdraw", genre: "UI/UX Development", price: 35000, discount: 10, image: "bahan/fifa23.png", featured: true, promo: false, description: "Pembuatan textdraw atau bissa dibilang custom td, disitu bbebas request dan berikan contoh aatau refrensi kepada  admin agar cepet dalam pembuatannya", rating: 5.0, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["mimgui", "UX"] },
    { id: 3, title: "Web Dashboard UCP", genre: "Web Development", price: 50000, discount: 15, image: "bahan/fifa23.png", featured: true, promo: true, description: "custom website dashboard untuk keperluan server rp dissitu bebas req, bisa add leaderboard, regist ucp, dan filtur lainnya, harga akan berubah tergantung kesulitannya aja.", rating: 4.9, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["PHP", "SQL"] },
    { id: 4, title: "Bug Fixing & Optimization", genre: "Maintenance", price: 150000, discount: 0, image: "bahan/fifa23.png", featured: false, promo: true, description: "Perbaikan error script, pembersihan memory leaks, dan optimasi query database.", rating: 4.8, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["Debug", "Optimization"] },
    { id: 5, title: "Custom Mapping Editor", genre: "Mapping", price: 20000, discount: 10, image: "bahan/fifa23.png", featured: true, promo: false, description: "Jasa pembuatan area map khusus (base faction, interior) yang efisien dan high FPS.", rating: 4.7, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["Object Editor"] },
    { id: 6, title: "Anti-Cheat Protection", genre: "Security", price: 100000, discount: 25, image: "bahan/fifa23.png", featured: false, promo: true, description: "Pemasangan sistem perlindungan untuk mendeteksi weapon hack dan tele-cheat otomatis.", rating: 4.9, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["Security"] },
    { id: 7, title: "Discord Bot Server.", genre: "Bot Development", price: 200000, discount: 0, image: "bahan/fifa23.png", featured: true, promo: false, description: "Bot Discord untuk notifikasi log server, verifikasi player, dan admin command.", rating: 4.6, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["JS", "Discord API"] },
    { id: 8, title: "Server Security Hardening", genre: "Server Setup", price: 300000, discount: 40, image: "bahan/fifa23.png", featured: false, promo: true, description: "Konfigurasi VPS/Linux dan setup firewall untuk perlindungan anti-DDoS.", rating: 4.7, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["Linux", "Network"] },
    { id: 9, title: "Custom Vehicle System", genre: "Modding", price: 35000, discount: 0, image: "bahan/fifa23.png", featured: true, promo: false, description: "Script sistem kendaraan, plat nomor, dan modifikasi mobil khusus, bisa add object pada mobil", rating: 4.5, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["PAWN", "Modding"] },
    { id: 10, title: "Consultation & Training", genre: "Educational", price: 100000, discount: 20, image: "bahan/fifa23.png", featured: true, promo: true, description: "Bimbingan coding PAWN dasar dan konsultasi struktur database server.", rating: 5.0, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["Consultation"] },
    { id: 11, title: "Auto FA Monloaader atau monetloader", genre: "Scripting", price: 30000, discount: 0, image: "bahan/fifa23.png", featured: false, promo: false, description: "script ini berjenis lua untuk kebutuhan kepolisiaan, meddis, dan faction lainnya disini ada auto fa", rating: 4.8, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["PAWN"] },
    { id: 12, title: "Pasal Kepolisian Database", genre: "Scripting", price: 20000, discount: 0, image: "bahan/fifa23.png", featured: false, promo: false, description: "Database sistem pasal hukum kepolisian untuk mempermudah proses penilangan dan arrest.", rating: 4.9, developer: "Soleh Dev", releaseDate: "2026-06-27", platforms: ["MySQL"] },
    ];

// Get all games
function getAllGames() {
    return games;
}

// Get featured games
function getFeaturedGames() {
    return games.filter(game => game.featured);
}

// Get promo games
function getPromoGames() {
    return games.filter(game => game.promo);
}

// Get game by ID
function getGameById(id) {
    return games.find(game => game.id === id);
}

// Get games by genre
function getGamesByGenre(genre) {
    return games.filter(game => 
        game.genre.toLowerCase().includes(genre.toLowerCase())
    );
}

// Search games
function searchGames(query) {
    const searchTerm = query.toLowerCase();
    return games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.genre.toLowerCase().includes(searchTerm) ||
        game.developer.toLowerCase().includes(searchTerm)
    );
}

// Calculate discount price
function calculateDiscountPrice(price, discount) {
    return discount > 0 ? price * (1 - discount/100) : price;
}

// Create game card HTML
function createGameCard(game) {
    const discountPrice = calculateDiscountPrice(game.price, game.discount);
    
    return `
        <div class="col-md-6 col-lg-3">
            <div class="game-card fade-in" data-game-id="${game.id}" tabindex="0" role="button" aria-label="Lihat detail ${game.title}">
                    <img src="${game.image}" class="card-img-top" alt="${game.title}">
                <div class="game-card-body">
                    <h5 class="game-title">${game.title}</h5>
                    <p class="game-genre">${game.genre}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            ${game.discount > 0 ? `
                                <span class="original-price">Rp ${game.price.toLocaleString('id-ID')}</span>
                                <span class="game-price discount">Rp ${discountPrice.toLocaleString('id-ID')}</span>
                            ` : `
                                <span class="game-price">Rp ${game.price.toLocaleString('id-ID')}</span>
                            `}
                        </div>
                        ${game.discount > 0 ? `<span class="badge-discount">-${game.discount}%</span>` : ''}
                    </div>
                    <div class="mt-2">
                        <span class="text-warning">
                            ${'★'.repeat(Math.floor(game.rating))}${'☆'.repeat(5 - Math.floor(game.rating))}
                        </span>
                        <span class="text-secondary ms-2">${game.rating}</span>
                    </div>
                    <button class="btn btn-primary-gamestore w-100 mt-3 buy-btn" data-game-id="${game.id}" data-game-title="${game.title}">
                        <i class="fas fa-shopping-cart me-1"></i> Beli
                    </button>
                    <button class="btn btn-outline-gamestore w-100 mt-2 wishlist-btn" data-game-id="${game.id}" title="Tambah ke Wishlist">
                        <i class="far fa-heart me-1"></i> Tambah ke Wishlist
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Create game detail modal HTML
function createGameDetailModal(game) {
    const discountPrice = calculateDiscountPrice(game.price, game.discount);
    
    return `
        <div class="modal-header">
            <h5 class="modal-title">${game.title}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <img src="${game.image}" class="img-fluid rounded mb-3" alt="${game.title}">
                </div>
                <div class="col-md-6">
                    <p><strong>Genre:</strong> ${game.genre}</p>
                    <p><strong>Developer:</strong> ${game.developer}</p>
                    <p><strong>Rating:</strong> 
                        <span class="text-warning">
                            ${'★'.repeat(Math.floor(game.rating))}${'☆'.repeat(5 - Math.floor(game.rating))}
                        </span>
                        ${game.rating}
                    </p>
                    <p><strong>Tanggal Rilis:</strong> ${new Date(game.releaseDate).toLocaleDateString('id-ID')}</p>
                    <p><strong>Platform:</strong> ${game.platforms.join(', ')}</p>
                    <hr>
                    <p>${game.description}</p>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            ${game.discount > 0 ? `
                                <span class="original-price">Rp ${game.price.toLocaleString('id-ID')}</span>
                                <span class="game-price discount">Rp ${discountPrice.toLocaleString('id-ID')}</span>
                            ` : `
                                <span class="game-price">Rp ${game.price.toLocaleString('id-ID')}</span>
                            `}
                            ${game.discount > 0 ? `<span class="badge-discount ms-2">-${game.discount}%</span>` : ''}
                        </div>
                        <button type="button" class="btn btn-primary-gamestore modal-buy-btn" data-game-id="${game.id}" data-game-title="${game.title}">Beli Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-gamestore" data-bs-dismiss="modal">Tutup</button>
            <button type="button" class="btn btn-primary-gamestore modal-wishlist-btn" data-game-id="${game.id}">
                <i class="far fa-heart me-1"></i> Tambah ke Wishlist
            </button>
        </div>
    `;
}
