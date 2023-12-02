from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse

class StaticViewSitemap(Sitemap):
    priority = 1.0

    def items(self):
        return ['main', 'about', 'pub', 'contacts']

    def location(self, item):
        return reverse('lawyer:' + item)
