alert('selamat datang di perhitungan Berat badan BMI')
var lagi = true
while (lagi === true){
    var bb = prompt('berapa berat badan anda ?');
    var tb =  prompt('berapa tinggi badan anda ?');
    var floatTb = parseFloat(tb/100);
    var tb2 = parseFloat(floatTb*floatTb)
    var hasil = parseFloat(bb/tb2);
    if (hasil < 18.5) {
        hasil = alert('berat badan hasil perhitungan BMI '+ Math.ceil(hasil) +' anda kurus !');
        
    }else if (hasil >= 18.5 && hasil <=24.9 ) {
        hasil = alert('berat badan hasil perhitungan BMI '+ Math.ceil(hasil) +' anda ideal !');
    }else if (hasil >= 24.9 && hasil <=29.9 ){
            hasil = alert('berat badan hasil perhitungan BMI '+ Math.ceil(hasil) +' anda gemuk !');
    }else if(hasil > 30.0){
        hasil = alert('berat badan hasil perhitungan BMI '+ Math.ceil(hasil) + ' anda obesitas !!!')
    }else{
        hasil = alert('bukan angka')
    }


    lagi = confirm('ingin selesai')
}
alert('terima kasih telah mencoba');
