
let mesaj =
    `
Migros'a hoşgeldiniz.
Money Kartınız varmı ?
1-Evet
2-Hayır
`;

//600
//indirimli 480
const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 20
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 160
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 420
    }

]


//true veya false
let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
    //money kartı vardır
    let isim = prompt("Adınızı Giriniz");
    let soyisim = prompt("Soyisminizi giriniz");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);

    odenecekTutar = musteri.hesapla();

    alert(`Müşteri Bilgileri : ${musteri.isim} ${musteri.soyisim}
            Ödenecek Tutar : ${odenecekTutar}
        `);
} else {
    //money kartı yoktur 
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`);
}