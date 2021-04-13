package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/shortdaddy0711/go-react-chat/pkg/websocket"
)

func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
	}
	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/ws", serveWs)
}

func main() {
	fmt.Println("Chat app started!")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
