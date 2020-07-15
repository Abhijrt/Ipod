import React from "react";
import Screen from "../components/Screen";

class Ipod extends React.Component {
  render() {
    return (
      <div style={styles.ipodContainer}>
        <Screen />

        <div
          id="inner-container"
          style={styles.wheel}
          onMouseOver={this.rotateWheel}
        >
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <i
                onClick={this.changePageToHomeScreen}
                style={styles.image}
                className="fas fa-bars"
              ></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              <i style={styles.image} className="fas fa-fast-backward"></i>
              <div
                onClick={this.changePage}
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #8c8181, transparent)",
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                }}
              ></div>
              <i style={styles.image} className="fas fa-fast-forward"></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div onClick={this.toggle} style={styles.playButton}>
              <i
                onClick={this.toggle}
                style={styles.image}
                className="fas fa-play"
              ></i>
              &nbsp;
              <i
                onClick={this.toggle}
                style={styles.image}
                className="fas fa-pause"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundImage: "radial-gradient(#adb1b5, #4d4f50)",
    margin: "4rem auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "24px",
  },
  wheel: {
    width: "75%",
    height: "40%",
    margin: "1rem auto",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "85%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    alignSelf: "center",
    fontSize: "1.5rem",
    color: "white",
  },
};

export default Ipod;
