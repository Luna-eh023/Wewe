/* =========================
   BUKA / TUTUP CHAT
========================= */

function toggleChat() {

    const chatPopup =
        document.getElementById("chatPopup");

    chatPopup.classList.toggle("active");

}


/* =========================
   BUKA CHAT ROOM
========================= */

function openChat(nama, chatItem) {

    const chatList =
        document.getElementById("chatList");

    const chatRoom =
        document.getElementById("chatRoom");

    const roomName =
        document.getElementById("roomName");


    // Mengganti nama user di bagian header
    roomName.textContent = nama;


    /* =========================
       HAPUS UNREAD
    ========================== */

    const unread =
        chatItem.querySelector(".unread");


    // Kalau chat memiliki unread
    if (unread) {

        // Ambil jumlah unread
        const jumlahUnread =
            parseInt(unread.textContent);


        // Hapus badge unread dari chat
        unread.remove();


        // Kurangi badge pada icon chat
        updateChatBadge(jumlahUnread);

    }


    /* =========================
       TAMPILKAN CHAT ROOM
    ========================== */

    // Sembunyikan daftar chat
    chatList.style.display = "none";


    // Tampilkan room
    chatRoom.classList.add("active");

}


/* =========================
   UPDATE BADGE CHAT
========================= */

function updateChatBadge(jumlah) {

    const badge =
        document.querySelector(".chat-badge");


    // Kalau badge sudah tidak ada
    if (!badge) {
        return;
    }


    // Ambil jumlah unread sekarang
    let total =
        parseInt(badge.textContent);


    // Kurangi dengan jumlah unread
    total = total - jumlah;


    /* =========================
       KALAU SUDAH 0
    ========================== */

    if (total <= 0) {

        // Hapus badge
        badge.remove();

    } else {

        // Update angka badge
        badge.textContent = total;

    }

}


/* =========================
   KEMBALI KE DAFTAR CHAT
========================= */

function backToChatList() {

    const chatList =
        document.getElementById("chatList");

    const chatRoom =
        document.getElementById("chatRoom");


    // Tutup chat room
    chatRoom.classList.remove("active");


    // Tampilkan daftar chat
    chatList.style.display = "block";

}


/* =========================
   KIRIM PESAN
========================= */

function sendMessage() {

    const input =
        document.getElementById("messageInput");

    const messages =
        document.getElementById("messages");


    // Ambil isi input
    const text =
        input.value.trim();


    // Jangan kirim pesan kosong
    if (text === "") {
        return;
    }


    /* =========================
       BUAT ELEMENT PESAN
    ========================== */

    const message =
        document.createElement("div");


    message.classList.add(
        "message",
        "sent"
    );


    message.innerHTML = `
        <p>${text}</p>
        <span>Sekarang</span>
    `;


    /* =========================
       MASUKKAN PESAN
    ========================== */

    messages.appendChild(message);


    // Kosongkan input
    input.value = "";


    // Scroll ke pesan paling bawah
    messages.scrollTop =
        messages.scrollHeight;

}


/* =========================
   ENTER UNTUK KIRIM
========================= */

function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}