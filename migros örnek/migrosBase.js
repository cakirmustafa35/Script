class migrosBase {
    indirimOrani = 20;

    /*
    
    urunler [
    {
    fiyat : 10,
    urunAdi : süt
    
    */


    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.urunler)) {
            //sepetim dolu
            if (this.kartVarmi) {
                //money kartı var
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                });
            } else {
                //money Kart yoktur 
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat
                })

            }

        } else {
            alert("En az bir tane ürün satın almalısınız");
        }
        return odenecekTutar;
    }
    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }
}