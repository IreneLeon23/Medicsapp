import React, { useState,  useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Linking,
  ScrollView,
  
} from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";


const CotizacionItem = ({
folio,
nombre_cliente,
estatus_orden,
fecha_captura,
fecha_compromiso,
comentario_cotizacion,
equipo,
total,
nombre_usuario
}) => {

  const [showDetails, setShowDetails] = useState(false); 
  const [editMode, setEditMode] = useState(false);

  const [updatedNombreCliente, setUpdatedNombreCliente] = useState(nombre_cliente);
  const [updatedEstatusOrden, setUpdatedEstatusOrden] = useState(estatus_orden);
  const [updatedFechaCaptura, setUpdatedFechaCaptura] = useState(fecha_captura);
  const [updatedFechaComproiso, setUpdatedFechaCompromiso] = useState(fecha_compromiso);
  const [updatedComentarioCotizacion, setUpdatedComentarioCotizacion] = useState(comentario_cotizacion);
  const [updatedEquipo, setUpdatedEquipo] = useState(equipo);
  const [updatedTotal, setUpdatedTotal] = useState(total);
  const [updatedNombreUsuario, setUpdatedNombreUsuario] = useState(nombre_usuario);
  
 

  const toggleModal = () => {
    setShowDetails(!showDetails);
  };
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = () => {
    // ... Actualiza los valores de tus estados con los nuevos valores editados ...

    // Finaliza el modo de edición después de guardar
    setEditMode(false);
  };
  
  return (
    <View style={styles.fatherContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldPrimaryID}>{folio}</Text>
            <MaterialCommunityIcons name="tag" size={20} color="#145498" />
            <Text style={styles.fieldPrimary}>{equipo}</Text>
            </View>
          <View style={styles.fieldContainer}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.fieldTerciary}
            >
              {comentario_cotizacion}
            </Text>
          </View>
          <View style={styles.fieldContainerAlt}>
  <Text style={[styles.fieldTerciaryAlt, styles.opaqueText]}>
  {nombre_cliente}
  </Text>
</View>
        </Card.Content>
        <View style={styles.optionButton}>
          <TouchableOpacity
            style={styles.verMasButton}
            onPress={() => setShowDetails(true)}
          >
            <Ionicons name="open-outline" size={22} color="#145498" />
          </TouchableOpacity>
          <Modal
            visible={showDetails}
            animationType="slide"
            onRequestClose={() => setShowDetails(false)}
          >
                        <View style={styles.modalContainer}>
              <ScrollView contentContainerStyle={styles.scrollContent}>
              <Text style={styles.fieldPrimary}>Folio: {folio}</Text>

                <TextInput
              style={[styles.input, styles.leftInput]}
              value={editMode ? updatedNombreCliente: nombre_cliente}
              label={"Nombre de cliente"}
              onChangeText={setUpdatedNombreCliente}
              mode="outlined"
              activeOutlineColor="#145498"
              disabled={!editMode}
            />
                <TextInput
              style={[styles.input, styles.leftInput]}
              value={editMode ? updatedEstatusOrden: estatus_orden}
              label={"Estatus de orden"}
              onChangeText={setUpdatedEstatusOrden}
              mode="outlined"
              activeOutlineColor="#145498"
              disabled={!editMode}
            /> 
 <TextInput
              style={[styles.input, styles.leftInput]}
              value={editMode ? updatedFechaCaptura: fecha_captura}
              label={"Fecha de captura"}
              onChangeText={setUpdatedFechaCaptura}
              mode="outlined"
              activeOutlineColor="#145498"
              disabled={!editMode}
            />
 <TextInput
          style={[styles.input, styles.leftInput]}
          value={editMode ? updatedFechaComproiso: fecha_compromiso}
          label={"Fecha de compromiso"}
          onChangeText={setUpdatedFechaCompromiso}
          mode="outlined"
          activeOutlineColor="#145498"
          disabled={!editMode}
        />  
       
      <TextInput
      style={[styles.input, styles.leftInput]}
      value={editMode ? updatedComentarioCotizacion: comentario_cotizacion}
      label={"Comentario de cotizacion"}
      onChangeText={setUpdatedComentarioCotizacion}
      mode="outlined"
      activeOutlineColor="#145498"
      disabled={!editMode}
    /> 
     <TextInput
      style={[styles.input, styles.leftInput]}
      value={editMode ? updatedEquipo: equipo}
      label={"Equipo"}
      onChangeText={setUpdatedEquipo}
      mode="outlined"
      activeOutlineColor="#145498"
      disabled={!editMode}
    /> 
    <TextInput
      style={[styles.input, styles.leftInput]}
      value={editMode ? updatedTotal: total}
      label={"Total"}
      onChangeText={setUpdatedTotal}
      mode="outlined"
      activeOutlineColor="#145498"
      disabled={!editMode}
    /> 
    <TextInput
      style={[styles.input, styles.leftInput]}
      value={editMode ? updatedNombreUsuario: nombre_usuario}
      label={"Usuario"}
      onChangeText={setUpdatedNombreUsuario}
      mode="outlined"
      activeOutlineColor="#145498"
      disabled={!editMode}
    /> 
            
                <TouchableOpacity
            style={editMode ? styles.saveButton : styles.editButton} // Cambia el estilo si está en modo de edición
            onPress={() => setEditMode(!editMode)} // Cambia el estado de editMode
          >
            <Text style={styles.ButtonText}>
              {editMode ? "Cancelar" : "Editar"}
            </Text>
          </TouchableOpacity>
          {editMode && ( // Muestra el botón "Guardar Cambios" solo en modo de edición
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveChanges}
            >
              <Text style={styles.ButtonText}>Guardar Cambios</Text>
            </TouchableOpacity>
          )}
                {/* Botón de "Cerrar" */}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    toggleEditMode(); // Sal del modo de edición si se cierra el modal
                    toggleModal(); // Cierra el modal
                  }}
                >
                  <Text style={styles.ButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Modal>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  fatherContainer: {
    alignItems: "center",
  },
  card: {
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 4,
    width: "98%",
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  fieldContainerAlt: {
    alignItems: "flex-end",
  },
  fieldContainerAltStart: {
    alignItems: "flex-start",
  },
  fieldPrimary: {
    fontFamily: "jakarta-bold",
    fontSize: 16,
    marginLeft: 5,
    color: "#333",
  },
  fieldPrimaryID: {
    fontFamily: "jakarta-bold",
    fontSize: 16,
    marginLeft: 1,
    color: "#145498",
  },
  fieldTel: {
    fontFamily: "jakarta-semi-bold",
    fontSize: 16,
    marginLeft: 1,
    marginEnd: 5,
    color: "#145498",
  },
  fieldSecondary: {
    fontFamily: "jakarta-semi-bold",
    fontSize: 16,
    marginLeft: 5,
    color: "#777",
  },
  fieldTerciary: {
    fontFamily: "jakarta-regular",
    fontSize: 16,
    marginLeft: 5,
    color: "#777",
  },
  fieldTerciaryAlt: {
    fontFamily: "jakarta-light",
    fontSize: 16,
    color: "#777",
    textAlign: "right",
  },
  opaqueText: {
    opacity: 0.7,
  },
  optionButton: {
    position: "absolute",
    top: 10,
    right: 5,
    padding: 1,
  },
  //MODAL
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
   // Estilos para el botón "Editar"
   editButton: {
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#145498",
    borderRadius: 5,
  },
  // Estilos para el botón "Guardar cambios"
  saveButton: {
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "green", // Personaliza el color para "Guardar Cambios"
    borderRadius: 5,
  },
  // Estilos para el botón "Cerrar"
  closeButton: {
    position: "absolute",
    top: 5,
    right: 3,
    paddingVertical: 5,
    paddingHorizontal: 7,
    backgroundColor: "#B92D4F",
    borderRadius: 5,
  },
  ButtonText: {
    fontFamily: "jakarta-semi-bold",
    fontSize: 16,
    color: "#fff",
  },
});

export default CotizacionItem;
