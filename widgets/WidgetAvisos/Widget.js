define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {

    return declare([BaseWidget], {

      baseClass: 'jimu-widget-avisos',

      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        _informacionMapa = this.map.itemInfo.item;
        _informacionWKID = this.map.graphics.spatialReference;
        _tablaInformacion = this.tablaInformacionMapa;
        _tablaCapas = this.tablaListadoCapas;
        _tablaDescripcion = this.tablaDescripcion;
        _longitud = this.map.itemInfo.itemData.operationalLayers.length;
        _capas = this.map.itemInfo.itemData.operationalLayers;
        _seccionTitulo = this.tituloDinamico;
        _subBloqueCapas = this.subBloqueCapas;
      },

      startup: function() {
       this.inherited(arguments);
       _seccionTitulo.innerHTML = _informacionMapa.title;

       _tablaInformacion.innerHTML += "<tr><td><p>Identificador: " + _informacionMapa.id + "</p></td></tr>";
       _tablaInformacion.innerHTML += "<tr><td><p>Tipo: " + _informacionMapa.type + "</p></td></tr>";
       _tablaInformacion.innerHTML += "<tr><td><p>Acceso: " + _informacionMapa.access + "</p></td></tr>";
       _tablaInformacion.innerHTML += "<tr><td><p>Etiquetas: " + _informacionMapa.tags + "</p></td></tr>";

       if (_longitud != 0) {
         for (var i = 0; i < _longitud; i++) {
           _tablaCapas.innerHTML += "<tr><td>" + _capas[i].title + "</td><td>" + _capas[i].id + "</td></tr>";
         }

       } else {
         _subBloqueCapas.style.display = "none";
       }

       _tablaDescripcion.innerHTML += "<tr><td><p>" + _informacionMapa.description + "</p></td></tr>";
       _tablaDescripcion.innerHTML += "<tr><td><p>Propietario: " + _informacionMapa.owner + "</p></td></tr>";
       _tablaDescripcion.innerHTML += "<tr><td><p>Referencia espacial (WKID): " + _informacionWKID.wkid + "</p></td></tr>";
      },


    });
  });
