run:
	docker run -d -p 3000:3000 --rm --name tmeApp tme:latest
stop:
	docker stop tmeApp