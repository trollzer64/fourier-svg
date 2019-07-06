function dft(x) {
    const N = x.length;
    let X = [];
    for (let k = 0; k < N; k++) {
        let real = 0;
        let img = 0;
        for (let n = 0; n < N; n++) {
            const phi = (TWO_PI * k * n) / N;
            real += x[n] * cos(phi);
            img += x[n] * (-sin(phi));
        }
        // Average of
        real /= N;
        img /= N;

        let frequency = k;
        let amplitude = sqrt(real * real + img * img);
        let phase = atan2(img, real);
        X[k] = { real, img, frequency, amplitude, phase};
    }
    return X;
}