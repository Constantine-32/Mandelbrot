import processing.core.PApplet;

public class Sketch extends PApplet {

  static final int COL = 800;
  static final int ROW = 600;
  static final int ITE = 100;
  static final float ZOOM = 0.00375f;

  public static void main(String[] args) {
    PApplet.main(new String[]{"Sketch"});
  }

  public void settings() {
    size(COL, ROW);
  }

  public void setup() {
    background(255);
    float a, b, ac, bc, aa, bb;
    for (int Y = 0; Y < ROW; Y++) {
      for (int X = 0; X < COL; X++) {
        a = ac = map(X, 0, COL-1, -COL*ZOOM/3*2, COL*ZOOM/3);
        b = bc = map(Y, 0, ROW-1, -ROW*ZOOM/2, ROW*ZOOM/2);

        int n = 0;
        while (n < ITE) {
          aa = a*a - b*b;
          bb = 2*a*b;
          a = aa + ac;
          b = bb + bc;
          if (abs(a+b) > 1600000) break;
          n++;
        }
        set(X, Y, color(map(n, 0, ITE, 0, 255)));
      }
    }
  }

  public void draw() {

  }
}
