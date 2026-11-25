var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MSOAName_1 = new ol.format.GeoJSON();
var features_MSOAName_1 = format_MSOAName_1.readFeatures(json_MSOAName_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSOAName_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSOAName_1.addFeatures(features_MSOAName_1);
var lyr_MSOAName_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSOAName_1, 
                style: style_MSOAName_1,
                popuplayertitle: 'MSOA Name',
                interactive: true,
                title: '<img src="styles/legend/MSOAName_1.png" /> MSOA Name'
            });
var format_EconomicallyinactiveOther_2 = new ol.format.GeoJSON();
var features_EconomicallyinactiveOther_2 = format_EconomicallyinactiveOther_2.readFeatures(json_EconomicallyinactiveOther_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EconomicallyinactiveOther_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomicallyinactiveOther_2.addFeatures(features_EconomicallyinactiveOther_2);
var lyr_EconomicallyinactiveOther_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomicallyinactiveOther_2, 
                style: style_EconomicallyinactiveOther_2,
                popuplayertitle: 'Economically inactive: Other %',
                interactive: true,
    title: 'Economically inactive: Other %<br />\
    <img src="styles/legend/EconomicallyinactiveOther_2_0.png" /> 1.1 - 2.4<br />\
    <img src="styles/legend/EconomicallyinactiveOther_2_1.png" /> 2.4 - 3.4<br />\
    <img src="styles/legend/EconomicallyinactiveOther_2_2.png" /> 3.4 - 4.5<br />\
    <img src="styles/legend/EconomicallyinactiveOther_2_3.png" /> 4.5 - 6.7<br />\
    <img src="styles/legend/EconomicallyinactiveOther_2_4.png" /> 6.7 - 10.8<br />' });
var format_EconomicallyinactiveLongtermsickordisabled_3 = new ol.format.GeoJSON();
var features_EconomicallyinactiveLongtermsickordisabled_3 = format_EconomicallyinactiveLongtermsickordisabled_3.readFeatures(json_EconomicallyinactiveLongtermsickordisabled_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EconomicallyinactiveLongtermsickordisabled_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomicallyinactiveLongtermsickordisabled_3.addFeatures(features_EconomicallyinactiveLongtermsickordisabled_3);
var lyr_EconomicallyinactiveLongtermsickordisabled_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomicallyinactiveLongtermsickordisabled_3, 
                style: style_EconomicallyinactiveLongtermsickordisabled_3,
                popuplayertitle: 'Economically inactive: Long-term sick or disabled %',
                interactive: true,
    title: 'Economically inactive: Long-term sick or disabled %<br />\
    <img src="styles/legend/EconomicallyinactiveLongtermsickordisabled_3_0.png" /> 1.1 - 3.3<br />\
    <img src="styles/legend/EconomicallyinactiveLongtermsickordisabled_3_1.png" /> 3.3 - 5.3<br />\
    <img src="styles/legend/EconomicallyinactiveLongtermsickordisabled_3_2.png" /> 5.3 - 7.3<br />\
    <img src="styles/legend/EconomicallyinactiveLongtermsickordisabled_3_3.png" /> 7.3 - 9.4<br />\
    <img src="styles/legend/EconomicallyinactiveLongtermsickordisabled_3_4.png" /> 9.4 - 12.3<br />' });
var format_EconomicallyinactiveLookingafterhomeorfamily_4 = new ol.format.GeoJSON();
var features_EconomicallyinactiveLookingafterhomeorfamily_4 = format_EconomicallyinactiveLookingafterhomeorfamily_4.readFeatures(json_EconomicallyinactiveLookingafterhomeorfamily_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EconomicallyinactiveLookingafterhomeorfamily_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomicallyinactiveLookingafterhomeorfamily_4.addFeatures(features_EconomicallyinactiveLookingafterhomeorfamily_4);
var lyr_EconomicallyinactiveLookingafterhomeorfamily_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomicallyinactiveLookingafterhomeorfamily_4, 
                style: style_EconomicallyinactiveLookingafterhomeorfamily_4,
                popuplayertitle: 'Economically inactive: Looking after home or family %',
                interactive: true,
    title: 'Economically inactive: Looking after home or family %<br />\
    <img src="styles/legend/EconomicallyinactiveLookingafterhomeorfamily_4_0.png" /> 0.5 - 3.2<br />\
    <img src="styles/legend/EconomicallyinactiveLookingafterhomeorfamily_4_1.png" /> 3.2 - 4.6<br />\
    <img src="styles/legend/EconomicallyinactiveLookingafterhomeorfamily_4_2.png" /> 4.6 - 6.4<br />\
    <img src="styles/legend/EconomicallyinactiveLookingafterhomeorfamily_4_3.png" /> 6.4 - 9.9<br />\
    <img src="styles/legend/EconomicallyinactiveLookingafterhomeorfamily_4_4.png" /> 9.9 - 15<br />' });
var format_EconomicallyinactiveStudent_5 = new ol.format.GeoJSON();
var features_EconomicallyinactiveStudent_5 = format_EconomicallyinactiveStudent_5.readFeatures(json_EconomicallyinactiveStudent_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EconomicallyinactiveStudent_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomicallyinactiveStudent_5.addFeatures(features_EconomicallyinactiveStudent_5);
var lyr_EconomicallyinactiveStudent_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomicallyinactiveStudent_5, 
                style: style_EconomicallyinactiveStudent_5,
                popuplayertitle: 'Economically inactive: Student %',
                interactive: true,
    title: 'Economically inactive: Student %<br />\
    <img src="styles/legend/EconomicallyinactiveStudent_5_0.png" /> 1.6 - 5.2<br />\
    <img src="styles/legend/EconomicallyinactiveStudent_5_1.png" /> 5.2 - 12.8<br />\
    <img src="styles/legend/EconomicallyinactiveStudent_5_2.png" /> 12.8 - 26.4<br />\
    <img src="styles/legend/EconomicallyinactiveStudent_5_3.png" /> 26.4 - 49.5<br />\
    <img src="styles/legend/EconomicallyinactiveStudent_5_4.png" /> 49.5 - 68.1<br />' });
var format_EconomicallyinactiveRetired_6 = new ol.format.GeoJSON();
var features_EconomicallyinactiveRetired_6 = format_EconomicallyinactiveRetired_6.readFeatures(json_EconomicallyinactiveRetired_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EconomicallyinactiveRetired_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomicallyinactiveRetired_6.addFeatures(features_EconomicallyinactiveRetired_6);
var lyr_EconomicallyinactiveRetired_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomicallyinactiveRetired_6, 
                style: style_EconomicallyinactiveRetired_6,
                popuplayertitle: 'Economically inactive: Retired %',
                interactive: true,
    title: 'Economically inactive: Retired %<br />\
    <img src="styles/legend/EconomicallyinactiveRetired_6_0.png" /> 3.8 - 13.4<br />\
    <img src="styles/legend/EconomicallyinactiveRetired_6_1.png" /> 13.4 - 21.5<br />\
    <img src="styles/legend/EconomicallyinactiveRetired_6_2.png" /> 21.5 - 26.7<br />\
    <img src="styles/legend/EconomicallyinactiveRetired_6_3.png" /> 26.7 - 32.2<br />\
    <img src="styles/legend/EconomicallyinactiveRetired_6_4.png" /> 32.2 - 41.7<br />' });
var format_EconomicallyinactiveAll_7 = new ol.format.GeoJSON();
var features_EconomicallyinactiveAll_7 = format_EconomicallyinactiveAll_7.readFeatures(json_EconomicallyinactiveAll_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EconomicallyinactiveAll_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomicallyinactiveAll_7.addFeatures(features_EconomicallyinactiveAll_7);
var lyr_EconomicallyinactiveAll_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomicallyinactiveAll_7, 
                style: style_EconomicallyinactiveAll_7,
                popuplayertitle: 'Economically inactive: All %',
                interactive: true,
    title: 'Economically inactive: All %<br />\
    <img src="styles/legend/EconomicallyinactiveAll_7_0.png" /> 28.5 - 38.9<br />\
    <img src="styles/legend/EconomicallyinactiveAll_7_1.png" /> 38.9 - 43.8<br />\
    <img src="styles/legend/EconomicallyinactiveAll_7_2.png" /> 43.8 - 48.3<br />\
    <img src="styles/legend/EconomicallyinactiveAll_7_3.png" /> 48.3 - 60.1<br />\
    <img src="styles/legend/EconomicallyinactiveAll_7_4.png" /> 60.1 - 79.5<br />' });
var format_ClaimantCountOct26_8 = new ol.format.GeoJSON();
var features_ClaimantCountOct26_8 = format_ClaimantCountOct26_8.readFeatures(json_ClaimantCountOct26_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClaimantCountOct26_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClaimantCountOct26_8.addFeatures(features_ClaimantCountOct26_8);
var lyr_ClaimantCountOct26_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClaimantCountOct26_8, 
                style: style_ClaimantCountOct26_8,
                popuplayertitle: 'Claimant Count % (Oct 26)',
                interactive: true,
    title: 'Claimant Count % (Oct 26)<br />\
    <img src="styles/legend/ClaimantCountOct26_8_0.png" /> 0.6 - 2.2<br />\
    <img src="styles/legend/ClaimantCountOct26_8_1.png" /> 2.2 - 3.4<br />\
    <img src="styles/legend/ClaimantCountOct26_8_2.png" /> 3.4 - 4.8<br />\
    <img src="styles/legend/ClaimantCountOct26_8_3.png" /> 4.8 - 7.4<br />\
    <img src="styles/legend/ClaimantCountOct26_8_4.png" /> 7.4 - 12.1<br />' });
var format_IMDscoredecile_9 = new ol.format.GeoJSON();
var features_IMDscoredecile_9 = format_IMDscoredecile_9.readFeatures(json_IMDscoredecile_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMDscoredecile_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMDscoredecile_9.addFeatures(features_IMDscoredecile_9);
var lyr_IMDscoredecile_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMDscoredecile_9, 
                style: style_IMDscoredecile_9,
                popuplayertitle: 'IMD score - decile',
                interactive: true,
    title: 'IMD score - decile<br />\
    <img src="styles/legend/IMDscoredecile_9_0.png" /> 1 - 2<br />\
    <img src="styles/legend/IMDscoredecile_9_1.png" /> 3 - 4<br />\
    <img src="styles/legend/IMDscoredecile_9_2.png" /> 5 - 6<br />\
    <img src="styles/legend/IMDscoredecile_9_3.png" /> 7 - 8<br />\
    <img src="styles/legend/IMDscoredecile_9_4.png" /> 9 - 10<br />' });
var format_NEMSALocalAuthorities_10 = new ol.format.GeoJSON();
var features_NEMSALocalAuthorities_10 = format_NEMSALocalAuthorities_10.readFeatures(json_NEMSALocalAuthorities_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEMSALocalAuthorities_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEMSALocalAuthorities_10.addFeatures(features_NEMSALocalAuthorities_10);
var lyr_NEMSALocalAuthorities_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NEMSALocalAuthorities_10, 
                style: style_NEMSALocalAuthorities_10,
                popuplayertitle: 'NEMSA Local Authorities',
                interactive: true,
                title: '<img src="styles/legend/NEMSALocalAuthorities_10.png" /> NEMSA Local Authorities'
            });
var format_Colleges_11 = new ol.format.GeoJSON();
var features_Colleges_11 = format_Colleges_11.readFeatures(json_Colleges_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colleges_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colleges_11.addFeatures(features_Colleges_11);
var lyr_Colleges_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colleges_11, 
                style: style_Colleges_11,
                popuplayertitle: 'Colleges',
                interactive: true,
    title: 'Colleges<br />\
    <img src="styles/legend/Colleges_11_0.png" /> College<br />' });
var format_JobCentrePlus_12 = new ol.format.GeoJSON();
var features_JobCentrePlus_12 = format_JobCentrePlus_12.readFeatures(json_JobCentrePlus_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JobCentrePlus_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JobCentrePlus_12.addFeatures(features_JobCentrePlus_12);
var lyr_JobCentrePlus_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JobCentrePlus_12, 
                style: style_JobCentrePlus_12,
                popuplayertitle: 'Job Centre Plus',
                interactive: true,
    title: 'Job Centre Plus<br />\
    <img src="styles/legend/JobCentrePlus_12_0.png" /> JCP<br />' });
var format_Employabilityproviders_13 = new ol.format.GeoJSON();
var features_Employabilityproviders_13 = format_Employabilityproviders_13.readFeatures(json_Employabilityproviders_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Employabilityproviders_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Employabilityproviders_13.addFeatures(features_Employabilityproviders_13);
var lyr_Employabilityproviders_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Employabilityproviders_13, 
                style: style_Employabilityproviders_13,
                popuplayertitle: 'Employability providers',
                interactive: true,
    title: 'Employability providers<br />\
    <img src="styles/legend/Employabilityproviders_13_0.png" /> Provider<br />' });
var format_NEMSAemployabilityservices_14 = new ol.format.GeoJSON();
var features_NEMSAemployabilityservices_14 = format_NEMSAemployabilityservices_14.readFeatures(json_NEMSAemployabilityservices_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEMSAemployabilityservices_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEMSAemployabilityservices_14.addFeatures(features_NEMSAemployabilityservices_14);
var lyr_NEMSAemployabilityservices_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NEMSAemployabilityservices_14, 
                style: style_NEMSAemployabilityservices_14,
                popuplayertitle: 'NEMSA employability services',
                interactive: true,
    title: 'NEMSA employability services<br />\
    <img src="styles/legend/NEMSAemployabilityservices_14_0.png" /> Employability Service<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_MSOAName_1.setVisible(true);lyr_EconomicallyinactiveOther_2.setVisible(true);lyr_EconomicallyinactiveLongtermsickordisabled_3.setVisible(true);lyr_EconomicallyinactiveLookingafterhomeorfamily_4.setVisible(true);lyr_EconomicallyinactiveStudent_5.setVisible(true);lyr_EconomicallyinactiveRetired_6.setVisible(true);lyr_EconomicallyinactiveAll_7.setVisible(true);lyr_ClaimantCountOct26_8.setVisible(true);lyr_IMDscoredecile_9.setVisible(true);lyr_NEMSALocalAuthorities_10.setVisible(true);lyr_Colleges_11.setVisible(true);lyr_JobCentrePlus_12.setVisible(true);lyr_Employabilityproviders_13.setVisible(true);lyr_NEMSAemployabilityservices_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MSOAName_1,lyr_EconomicallyinactiveOther_2,lyr_EconomicallyinactiveLongtermsickordisabled_3,lyr_EconomicallyinactiveLookingafterhomeorfamily_4,lyr_EconomicallyinactiveStudent_5,lyr_EconomicallyinactiveRetired_6,lyr_EconomicallyinactiveAll_7,lyr_ClaimantCountOct26_8,lyr_IMDscoredecile_9,lyr_NEMSALocalAuthorities_10,lyr_Colleges_11,lyr_JobCentrePlus_12,lyr_Employabilityproviders_13,lyr_NEMSAemployabilityservices_14];
lyr_MSOAName_1.set('fieldAliases', {'FID': 'FID', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_EconomicallyinactiveOther_2.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_EconomicallyinactiveLongtermsickordisabled_3.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_EconomicallyinactiveLookingafterhomeorfamily_4.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_EconomicallyinactiveStudent_5.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_EconomicallyinactiveRetired_6.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_EconomicallyinactiveAll_7.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_ClaimantCountOct26_8.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_IMDscoredecile_9.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA Code': 'MSOA Code', 'MSOA Name': 'MSOA Name', 'Local Authority': 'Local Authority', 'lad24cd': 'lad24cd', 'IMD score - rank': 'IMD score - rank', 'IMD score - decile': 'IMD score - decile', 'Claimant Count % (Oct 26)': 'Claimant Count % (Oct 26)', 'Economically inactive %': 'Economically inactive %', 'Economically inactive: Retired %': 'Economically inactive: Retired %', 'Economically inactive: Student %': 'Economically inactive: Student %', 'Economically inactive: Looking after home or family %': 'Economically inactive: Looking after home or family %', 'Economically inactive: Long-term sick or disabled %': 'Economically inactive: Long-term sick or disabled %', 'Economically inactive: Other %': 'Economically inactive: Other %', });
lyr_NEMSALocalAuthorities_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area_Code': 'Area_Code', 'Area_Description': 'Area_Description', 'File_Name': 'File_Name', 'Feature_Serial_Number': 'Feature_Serial_Number', 'Collection_Serial_Number': 'Collection_Serial_Number', 'Global_Polygon_ID': 'Global_Polygon_ID', 'Admin_Unit_ID': 'Admin_Unit_ID', 'Census_Code': 'Census_Code', 'Hectares': 'Hectares', 'Non_Inland_Area': 'Non_Inland_Area', 'Area_Type_Code': 'Area_Type_Code', 'Area_Type_Description': 'Area_Type_Description', 'Non_Area_Type_Code': 'Non_Area_Type_Code', 'Non_Area_Type_Description': 'Non_Area_Type_Description', 'Soc_Ent_2019': 'Soc_Ent_2019', 'Soc_Ent_2008': 'Soc_Ent_2008', });
lyr_Colleges_11.set('fieldAliases', {'fid': 'fid', 'Organisation Name': 'Organisation Name', 'Type': 'Type', 'Local Authority Area': 'Local Authority Area', 'Specific regional areas work covers in NECA': 'Specific regional areas work covers in NECA', 'Delivery  (Address/Postcode/Virtual)': 'Delivery  (Address/Postcode/Virtual)', 'Postcode': 'Postcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_JobCentrePlus_12.set('fieldAliases', {'fid': 'fid', 'Organisation Name': 'Organisation Name', 'Type': 'Type', 'Local Authority Area': 'Local Authority Area', 'Specific regional areas work covers in NECA': 'Specific regional areas work covers in NECA', 'Delivery  (Address/Postcode/Virtual)': 'Delivery  (Address/Postcode/Virtual)', 'Postcode': 'Postcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Employabilityproviders_13.set('fieldAliases', {'fid': 'fid', 'Organisation Name': 'Organisation Name', 'Type': 'Type', 'Local Authority Area': 'Local Authority Area', 'Specific regional areas work covers in NECA': 'Specific regional areas work covers in NECA', 'Delivery  (Address/Postcode/Virtual)': 'Delivery  (Address/Postcode/Virtual)', 'Postcode': 'Postcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_NEMSAemployabilityservices_14.set('fieldAliases', {'fid': 'fid', 'Organisation Name': 'Organisation Name', 'Type': 'Type', 'Local Authority Area': 'Local Authority Area', 'Specific regional areas work covers in NECA': 'Specific regional areas work covers in NECA', 'Delivery  (Address/Postcode/Virtual)': 'Delivery  (Address/Postcode/Virtual)', 'Postcode': 'Postcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSOAName_1.set('fieldImages', {'FID': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_EconomicallyinactiveOther_2.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_EconomicallyinactiveLongtermsickordisabled_3.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_EconomicallyinactiveLookingafterhomeorfamily_4.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_EconomicallyinactiveStudent_5.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_EconomicallyinactiveRetired_6.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_EconomicallyinactiveAll_7.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_ClaimantCountOct26_8.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_IMDscoredecile_9.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA Code': 'TextEdit', 'MSOA Name': 'TextEdit', 'Local Authority': 'TextEdit', 'lad24cd': 'TextEdit', 'IMD score - rank': 'Range', 'IMD score - decile': 'Range', 'Claimant Count % (Oct 26)': 'TextEdit', 'Economically inactive %': 'TextEdit', 'Economically inactive: Retired %': 'TextEdit', 'Economically inactive: Student %': 'TextEdit', 'Economically inactive: Looking after home or family %': 'TextEdit', 'Economically inactive: Long-term sick or disabled %': 'TextEdit', 'Economically inactive: Other %': 'TextEdit', });
lyr_NEMSALocalAuthorities_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_Code': 'TextEdit', 'Area_Description': 'TextEdit', 'File_Name': 'TextEdit', 'Feature_Serial_Number': 'Range', 'Collection_Serial_Number': 'Range', 'Global_Polygon_ID': 'Range', 'Admin_Unit_ID': 'Range', 'Census_Code': 'TextEdit', 'Hectares': 'TextEdit', 'Non_Inland_Area': 'TextEdit', 'Area_Type_Code': 'TextEdit', 'Area_Type_Description': 'TextEdit', 'Non_Area_Type_Code': 'TextEdit', 'Non_Area_Type_Description': 'TextEdit', 'Soc_Ent_2019': 'TextEdit', 'Soc_Ent_2008': 'TextEdit', });
lyr_Colleges_11.set('fieldImages', {'fid': 'TextEdit', 'Organisation Name': 'TextEdit', 'Type': 'TextEdit', 'Local Authority Area': 'TextEdit', 'Specific regional areas work covers in NECA': 'TextEdit', 'Delivery  (Address/Postcode/Virtual)': 'TextEdit', 'Postcode': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_JobCentrePlus_12.set('fieldImages', {'fid': 'TextEdit', 'Organisation Name': 'TextEdit', 'Type': 'TextEdit', 'Local Authority Area': 'TextEdit', 'Specific regional areas work covers in NECA': 'TextEdit', 'Delivery  (Address/Postcode/Virtual)': 'TextEdit', 'Postcode': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Employabilityproviders_13.set('fieldImages', {'fid': 'TextEdit', 'Organisation Name': 'TextEdit', 'Type': 'TextEdit', 'Local Authority Area': 'TextEdit', 'Specific regional areas work covers in NECA': 'TextEdit', 'Delivery  (Address/Postcode/Virtual)': 'TextEdit', 'Postcode': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_NEMSAemployabilityservices_14.set('fieldImages', {'fid': 'TextEdit', 'Organisation Name': 'TextEdit', 'Type': 'TextEdit', 'Local Authority Area': 'TextEdit', 'Specific regional areas work covers in NECA': 'TextEdit', 'Delivery  (Address/Postcode/Virtual)': 'TextEdit', 'Postcode': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSOAName_1.set('fieldLabels', {'FID': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'inline label - visible with data', 'MSOA Name': 'inline label - visible with data', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'hidden field', });
lyr_EconomicallyinactiveOther_2.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'no label', });
lyr_EconomicallyinactiveLongtermsickordisabled_3.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'no label', 'Economically inactive: Other %': 'hidden field', });
lyr_EconomicallyinactiveLookingafterhomeorfamily_4.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'no label', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'hidden field', });
lyr_EconomicallyinactiveStudent_5.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'no label', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'hidden field', });
lyr_EconomicallyinactiveRetired_6.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'no label', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'hidden field', });
lyr_EconomicallyinactiveAll_7.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'no label', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'hidden field', });
lyr_ClaimantCountOct26_8.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'hidden field', 'Claimant Count % (Oct 26)': 'no label', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'hidden field', });
lyr_IMDscoredecile_9.set('fieldLabels', {'fid': 'hidden field', 'MSOA21CD': 'hidden field', 'MSOA21NM': 'hidden field', 'MSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'MSOA Code': 'hidden field', 'MSOA Name': 'hidden field', 'Local Authority': 'hidden field', 'lad24cd': 'hidden field', 'IMD score - rank': 'hidden field', 'IMD score - decile': 'no label', 'Claimant Count % (Oct 26)': 'hidden field', 'Economically inactive %': 'hidden field', 'Economically inactive: Retired %': 'hidden field', 'Economically inactive: Student %': 'hidden field', 'Economically inactive: Looking after home or family %': 'hidden field', 'Economically inactive: Long-term sick or disabled %': 'hidden field', 'Economically inactive: Other %': 'hidden field', });
lyr_NEMSALocalAuthorities_10.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Area_Code': 'hidden field', 'Area_Description': 'hidden field', 'File_Name': 'hidden field', 'Feature_Serial_Number': 'hidden field', 'Collection_Serial_Number': 'hidden field', 'Global_Polygon_ID': 'hidden field', 'Admin_Unit_ID': 'hidden field', 'Census_Code': 'hidden field', 'Hectares': 'hidden field', 'Non_Inland_Area': 'hidden field', 'Area_Type_Code': 'hidden field', 'Area_Type_Description': 'hidden field', 'Non_Area_Type_Code': 'hidden field', 'Non_Area_Type_Description': 'hidden field', 'Soc_Ent_2019': 'hidden field', 'Soc_Ent_2008': 'hidden field', });
lyr_Colleges_11.set('fieldLabels', {'fid': 'hidden field', 'Organisation Name': 'inline label - visible with data', 'Type': 'hidden field', 'Local Authority Area': 'hidden field', 'Specific regional areas work covers in NECA': 'inline label - visible with data', 'Delivery  (Address/Postcode/Virtual)': 'inline label - visible with data', 'Postcode': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_JobCentrePlus_12.set('fieldLabels', {'fid': 'hidden field', 'Organisation Name': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Local Authority Area': 'hidden field', 'Specific regional areas work covers in NECA': 'inline label - visible with data', 'Delivery  (Address/Postcode/Virtual)': 'inline label - visible with data', 'Postcode': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Employabilityproviders_13.set('fieldLabels', {'fid': 'hidden field', 'Organisation Name': 'inline label - visible with data', 'Type': 'hidden field', 'Local Authority Area': 'hidden field', 'Specific regional areas work covers in NECA': 'inline label - visible with data', 'Delivery  (Address/Postcode/Virtual)': 'inline label - visible with data', 'Postcode': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_NEMSAemployabilityservices_14.set('fieldLabels', {'fid': 'hidden field', 'Organisation Name': 'inline label - visible with data', 'Type': 'hidden field', 'Local Authority Area': 'hidden field', 'Specific regional areas work covers in NECA': 'inline label - visible with data', 'Delivery  (Address/Postcode/Virtual)': 'inline label - visible with data', 'Postcode': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_NEMSAemployabilityservices_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});