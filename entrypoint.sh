#!/usr/bin/env bash
set -e
set -o pipefail

blow_up() {
	echo "Missing required enviroment variable '$1'. Please, take a look at the manual." >&2
	exit 1
}
[ "$ZUP_API_URL" ] || blow_up 'ZUP_API_URL'
[ "$LANDING_API_URL" ] || blow_up 'LANDING_API_URL'

sed -i "s@{ZUP_API_URL}@$ZUP_API_URL@g" /var/www/unicef-landing-page/index.html
sed -i "s@{LANDING_API_URL}@$LANDING_API_URL@g" /var/www/unicef-landing-page/index.html

echo "UNICEF-LANDING-WEB is running."

exec "$@"
