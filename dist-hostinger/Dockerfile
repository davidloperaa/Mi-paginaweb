FROM nginx:alpine

# Copiar archivos estáticos a la raíz de Nginx
COPY index.html /usr/share/nginx/html/index.html
COPY guia-marketing-digital-ia-2026.html /usr/share/nginx/html/guia-marketing-digital-ia-2026.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Permisos
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
