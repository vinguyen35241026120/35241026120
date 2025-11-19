function startGame() {
// Chỉ số Anh Hùng
var health = 120;       // Máu
var strength = 25;      // Sát thương
var agility = 30;       // Né đòn (%)
var intel = 20;         // Tỉ lệ chí mạng (%)

// Chỉ số Rồng
var dragonHealth = 180;
var dragonStr = 30;
var dragonAgi = 25;
var dragonInt = 15;

// Kiểm soát vòng lặp
var gameContinue = true;

while (gameContinue) {

    // === 1. ANH HÙNG TẤN CÔNG TRƯỚC ===
    var heroHit = Math.random() * 100 > dragonAgi;   // Dragon né?
    
    if (heroHit) {
        dragonHealth -= strength;
        alert("TRẢM LONG! Bạn gây " + strength + " sát thương cho Rồng!");

        // === 9. CRITICAL của Hero (NGẪU NHIÊN > intel) ===
        var heroCritical = Math.random() * 100 > intel;
        if (heroCritical) {
            dragonHealth -= strength * 2; // thêm 200%
            alert("CHÍ MẠNG!!! Bạn gây thêm " + (strength * 2) + " sát thương!");
        }

    } else {
        alert("XÍ HỤT! Rồng đã né đòn của bạn!");
    }

    // Kiểm tra Rồng chết?
    if (dragonHealth <= 0) {
        alert("BATTLE WON! 🎉 Bạn đạt danh hiệu Dũng Sĩ Diệt Rồng!");
        alert("LEVEL UP! Chúc mừng bạn lên cấp 6! XP +600");
        gameContinue = false;
        break;
    }

    // === 3. RỒNG TẤN CÔNG SAU ===
    var dragonHit = Math.random() * 100 > agility; // Hero né?

    if (dragonHit) {
        health -= dragonStr;
        alert("🔥 HỎA CẦU! Rồng gây " + dragonStr + " sát thương cho bạn!");

        // === 10. Rồng CRITICAL (NGẪU NHIÊN > dragonInt) ===
        var dragonCritical = Math.random() * 100 > dragonInt;
        if (dragonCritical) {
            health -= dragonStr * 2;
            alert("💥 CHÍ MẠNG! Rồng gây thêm " + (dragonStr * 2) + " sát thương!");
        }

    } else {
        alert("Bạn né được đòn của Rồng!");
    }

    // Kiểm tra Anh Hùng chết?
    if (health <= 0) {
        alert("GAME OVER 😢 Bạn đã trở thành món hiệp sĩ nướng lá lốt của Rồng!");
        gameContinue = false;
        break;
    }
}
}
